import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as S from "./ToDo.styled";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import TextField from "../../components/TextField/TextField";
import { addTask, updateTask, deleteTask, setEditingTaskId } from "../../store/todoSlice";
import type { Task } from "../../store/todoSlice";
import type { RootState, AppDispatch } from "../../store";

interface FormValues {
  title: string;
  desc: string;
}

const TodoList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((state: RootState) => state.todo.tasks);
  const editingTaskId = useSelector((state: RootState) => state.todo.editingTaskId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormValues>();

  useEffect(() => {
    if (editingTaskId !== null) {
      const task = tasks.find((t) => t.id === editingTaskId);
      if (task) {
        setValue("title", task.title);
        setValue("desc", task.desc);
      }
    } else {
      reset();
    }
  }, [editingTaskId, tasks, setValue, reset]);

  const openModal = (task?: Task) => {
    const taskToEdit = task || null;
    dispatch(setEditingTaskId(taskToEdit?.id ?? null));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    dispatch(setEditingTaskId(null));
    reset();
  };

  const onSubmit = (data: FormValues) => {
    if (editingTaskId !== null) {
      dispatch(updateTask({ id: editingTaskId, title: data.title, desc: data.desc }));
    } else {
      dispatch(addTask({ title: data.title, desc: data.desc }));
    }
    closeModal();
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Mis Tareas</S.Title>
        {tasks.length === 0 ? (
          <S.EmptyText>No hay tareas todavía</S.EmptyText>
        ) : (
          <S.List>
            {tasks.map((task) => (
              <S.TodoItem key={task.id}>
                <S.TaskInfo>
                  <S.TaskTitle>{task.title}</S.TaskTitle>
                  {task.desc && <S.TaskDesc>{task.desc}</S.TaskDesc>}
                </S.TaskInfo>
                <S.Actions>
                  <Button onClick={() => openModal(task)}>Editar</Button>
                  <Button onClick={() => dispatch(deleteTask(task.id))}>Eliminar</Button>
                </S.Actions>
              </S.TodoItem>
            ))}
          </S.List>
        )}
      </S.Container>

      <FloatingButton onClick={openModal} />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={editingTaskId !== null ? "Editar tarea" : "Agregar tarea"}
      >
        <S.ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.FormFields>
              <TextField
                {...register("title", { required: "El título es obligatorio" })}
                placeholder="Título de la tarea"
                error={errors.title?.message}
              />
              <TextField
                {...register("desc")}
                placeholder="Descripción (opcional)"
                multiline
              />
            </S.FormFields>

            <S.FormActions>
              <Button type="submit" fullWidth>
                {editingTaskId !== null ? "Guardar cambios" : "Agregar"}
              </Button>
            </S.FormActions>
          </form>
        </S.ModalContent>
      </Modal>
    </S.Wrapper>
  );
};

export default TodoList;
