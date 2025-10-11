interface TodoResponse {
  id: number;
  title: string;
  description?: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

const BASE_URL = import.meta.env.VITE_API_URL + "/todos";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Usuario no autenticado");
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

export const getTodos = async (): Promise<TodoResponse[]> => {
  const res = await fetch(BASE_URL, { headers: getAuthHeader() });
  if (!res.ok) throw new Error("Error al obtener ToDos");
  const data: TodoResponse[] = await res.json();
  return data.map((todo) => ({ ...todo, desc: todo.description }));
};

export const createTodo = async (data: {
  title: string;
  desc?: string;
}): Promise<TodoResponse> => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: getAuthHeader(),
    body: JSON.stringify({ title: data.title, description: data.desc }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Error al crear ToDo");
  }
  const todo = await res.json();
  return { ...todo, desc: todo.description };
};

export const updateTodo = async (
  id: number,
  data: { title: string; desc?: string }
): Promise<TodoResponse> => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: getAuthHeader(),
    body: JSON.stringify({ title: data.title, description: data.desc }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Error al actualizar ToDo");
  }
  const todo = await res.json();
  return { ...todo, desc: todo.description };
};

export const deleteTodo = async (id: number): Promise<void> => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: getAuthHeader(),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Error al eliminar ToDo");
  }
};
