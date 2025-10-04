import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./registerSchema";
import type { RegisterFormValues } from "./registerSchema";

import Swal from "sweetalert2";

import Card from "../../components/Card/Card";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import Typography from "../../components/Typography/Typography";
import Link from "../../components/Link/Link";
import * as S from "./Register.styled";

const API_URL = "http://localhost:3000/auth/register";

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      const { name, email, password } = data;

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Error al registrar usuario");
      }

      localStorage.setItem("token", result.token);

      Swal.fire({
        title: "¡Registro exitoso! ",
        text: "Tu cuenta ha sido creada correctamente.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });

      reset();
    } catch (error: any) {
      console.error("Error:", error.message);

      Swal.fire({
        title: "Error",
        text: error.message || "No se pudo registrar el usuario.",
        icon: "error",
        confirmButtonText: "Intentar de nuevo",
      });
    }
  };

  return (
    <S.RegisterWrapper>
      <Card
        padding="2.5rem"
        borderRadius="16px"
        boxShadow="0 4px 20px rgba(0,0,0,0.08)"
        maxWidth="420px"
      >
        <Typography as="h1" size="xl" weight="bold" className="register-title">
          Crear Cuenta
        </Typography>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            type="text"
            placeholder="Nombre completo"
            {...register("name")}
            error={errors.name?.message}
          />

          <TextField
            type="email"
            placeholder="Correo electrónico"
            {...register("email")}
            error={errors.email?.message}
          />

          <TextField
            type="password"
            placeholder="Contraseña"
            {...register("password")}
            error={errors.password?.message}
          />

          <TextField
            type="password"
            placeholder="Confirmar contraseña"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />

          <Button type="submit" fullWidth>
            Registrarse
          </Button>
        </S.Form>

        <S.Footer>
          ¿Ya tienes cuenta? <Link href="/login">Inicia Sesión</Link>
        </S.Footer>
      </Card>
    </S.RegisterWrapper>
  );
};

export default Register;
