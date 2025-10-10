export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await fetch("http://localhost:3000/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Error al registrar usuario");
  }

  return res.json();
};

export const loginUser = async (data: { email: string; password: string }) => {
  const res = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Error al iniciar sesión");
  }

  return res.json();
};

export const refreshToken = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:3000/auth/refresh", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("No se pudo refrescar el token");
  }

  const data = await res.json();
  localStorage.setItem("token", data.token);
  return data;
};
