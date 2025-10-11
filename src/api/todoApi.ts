export interface TodoData {
  id?: number;
  title: string;
  desc?: string;
}

const API_URL = import.meta.env.VITE_API_URL + "/todos";

export const fetchTodos = async (token: string) => {
  const res = await fetch(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("No se pudieron cargar las tareas");
  return res.json();
};

export const createTodo = async (data: TodoData, token: string) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json", 
      Authorization: `Bearer ${token}` 
    },
    body: JSON.stringify({
      title: data.title,
      description: data.desc, 
    }),
  });
  if (!res.ok) throw new Error("No se pudo crear la tarea");
  return res.json();
};

export const updateTodo = async (id: number, data: TodoData, token: string) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { 
      "Content-Type": "application/json", 
      Authorization: `Bearer ${token}` 
    },
    body: JSON.stringify({
      title: data.title,
      description: data.desc, 
    }),
  });
  if (!res.ok) throw new Error("No se pudo actualizar la tarea");
  return res.json();
};


export const deleteTodo = async (id: number, token: string) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("No se pudo eliminar la tarea");
  return true;
};
