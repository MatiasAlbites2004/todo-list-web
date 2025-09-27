import React, { useState } from "react";
import * as S from "./ToDo.styled";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";

interface Task {
  id: number;
  title: string;
  desc: string;
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const openModal = (task?: Task) => {
    if (task) {
      setEditingId(task.id);
      setTitle(task.title);
      setDesc(task.desc);
    } else {
      setEditingId(null);
      setTitle("");
      setDesc("");
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTitle("");
    setDesc("");
    setEditingId(null);
  };

  const handleAddTask = () => {
    if (!title.trim()) return;

    if (editingId !== null) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === editingId ? { ...t, title, desc } : t
        )
      );
    } else {
      const newTask: Task = { id: Date.now(), title, desc };
      setTasks((prev) => [...prev, newTask]);
    }

    closeModal();
  };

  const handleDelete = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
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
                  <Button onClick={() => handleDelete(task.id)}>
                    Eliminar
                  </Button>
                </S.Actions>
              </S.TodoItem>
            ))}
          </S.List>
        )}
      </S.Container>

      <FloatingButton onClick={() => openModal()} />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={editingId !== null ? "Editar tarea" : "Agregar tarea"}
      >
        <S.ModalContent>
          <S.Input
            type="text"
            placeholder="Título de la tarea"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <S.Textarea
            placeholder="Descripción (opcional)"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <Button onClick={handleAddTask} fullWidth>
            {editingId !== null ? "Guardar cambios" : "Agregar"}
          </Button>
        </S.ModalContent>
      </Modal>
    </S.Wrapper>
  );
};

export default TodoList;
