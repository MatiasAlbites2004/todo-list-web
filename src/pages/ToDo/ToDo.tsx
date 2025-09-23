import React, { useState } from "react";
import styles from "./ToDo.module.css";

interface Task {
    title: string;
    desc: string;
}

const TodoList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [title, setTitle] = useState<string>("");
    const [desc, setDesc] = useState<string>("");

    const openModal = (index: number | null = null) => {
        setIsModalOpen(true);
        if (index !== null) {
            setEditingIndex(index);
            setTitle(tasks[index].title);
            setDesc(tasks[index].desc);
        } else {
            setEditingIndex(null);
            setTitle("");
            setDesc("");
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const saveTask = () => {
        if (!title.trim()) {
            alert("El título es obligatorio");
            return;
        }

        if (editingIndex !== null) {
            const updatedTasks = [...tasks];
            updatedTasks[editingIndex] = { title, desc };
            setTasks(updatedTasks);
        } else {
            setTasks([...tasks, { title, desc }]);
        }

        closeModal();
    };

    const deleteTask = (index: number) => {
        if (confirm("¿Seguro que quieres eliminar esta tarea?")) {
            setTasks(tasks.filter((_, i) => i !== index));
        }
    };

    return (
        <div className={styles.wrapper}>
            <h1>Mi To-Do List</h1>

            <div className={styles.taskList}>
                {tasks.map((task, index) => (
                    <div key={index} className={styles.taskCard}>
                        <div className={styles.taskInfo}>
                            <div className={styles.taskTitle}>{task.title}</div>
                            <div className={styles.taskDesc}>{task.desc}</div>
                        </div>
                        <div className={styles.taskActions}>
                            <button
                                className={`${styles.btnAction} ${styles.edit}`}
                                onClick={() => openModal(index)}
                            >
                                Editar
                            </button>
                            <button
                                className={`${styles.btnAction} ${styles.delete}`}
                                onClick={() => deleteTask(index)}
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <button className={styles.fab} onClick={() => openModal()}>
                +
            </button>

            {isModalOpen && (
                <div className={styles.modal} onClick={closeModal}>
                    <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2>{editingIndex !== null ? "Editar Tarea" : "Nueva Tarea"}</h2>
                        <input
                            type="text"
                            placeholder="Título de la tarea"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            placeholder="Descripción"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        <div className={styles.modalActions}>
                            <button
                                className={`${styles.btn} ${styles.cancel}`}
                                onClick={closeModal}
                            >
                                Cancelar
                            </button>
                            <button
                                className={`${styles.btn} ${styles.save}`}
                                onClick={saveTask}
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TodoList;
