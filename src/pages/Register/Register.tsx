import React, { useState } from "react";
import styles from "./Register.module.css";

const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    console.log("Register data:", { name, email, password, confirmPassword });
  };

  return (
    <div className={styles.registerWrapper}>
      <div className={styles.container}>
        <h1>Crear Cuenta</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Registrarse</button>
        </form>
        <div className={styles.textCenter}>
          <p>
            ¿Ya tienes cuenta? <a href="/login">Inicia Sesión</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
