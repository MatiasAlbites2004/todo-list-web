import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as S from "./ToDo.styled";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import TextField from "../../components/TextField/TextField";
import {
  setTasks,
  addTask,
  updateTask,
  deleteTask,
  setEditingTaskId,
} from "../../store/todoSlice";
import type { Task } from "../../store/todoSlice";
import type { RootState, AppDispatch } from "../../store";
import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo as apiDeleteTodo,
} from "../../api/todoApi";

interface FormValues {
  title: string;
  desc: string;
}

const TodoList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((state: RootState) => state.todo.tasks);
  const editingTaskId = useSelector(
    (state: RootState) => state.todo.editingTaskId
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const token = localStorage.getItem("token") ?? "";

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const todosFromApi = await fetchTodos(token);
        const todos: Task[] = todosFromApi.map((t: any) => ({
          id: t.id,
          title: t.title,
          desc: t.description || "",
        }));
        dispatch(setTasks(todos));
      } catch (err) {
        console.error("Error fetching todos:", err);
      }
    };
    loadTodos();
  }, [dispatch, token]);

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
    dispatch(setEditingTaskId(task?.id ?? null));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    dispatch(setEditingTaskId(null));
    reset();
  };

  const onSubmit = async (data: FormValues) => {
    try {
      if (editingTaskId !== null) {
        const updated = await updateTodo(editingTaskId, data, token);
        dispatch(
          updateTask({
            id: updated.id,
            title: updated.title,
            desc: updated.description || "",
          })
        );
      } else {
        const created = await createTodo(data, token);
        dispatch(
          addTask({
            id: created.id,
            title: created.title,
            desc: created.description || "",
          })
        );
      }
      closeModal();
    } catch (err) {
      console.error("Error saving todo:", err);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await apiDeleteTodo(id, token);
      dispatch(deleteTask(id));
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
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
                  <Button onClick={() => handleDelete(task.id)}>Eliminar</Button>
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
