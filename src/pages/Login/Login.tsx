import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { LoginFormValues } from "./loginSchema";
import { loginSchema } from "./loginSchema";
import Swal from "sweetalert2";

import Button from "../../components/Button/Button";
import TextField from "../../components/TextField/TextField";
import Link from "../../components/Link/Link";
import Typography from "../../components/Typography/Typography";
import * as S from "./Login.styled";
import Card from "../../components/Card/Card";

import { useAppDispatch } from "../../store/hooks";
import { loginUserThunk } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await dispatch(loginUserThunk(data)).unwrap();
      reset();

      await Swal.fire({
        title: "¡Bienvenido!",
        text: "Has iniciado sesión correctamente.",
        icon: "success",
        confirmButtonText: "Continuar",
      });

      navigate("/todo-list");
    } catch (error: any) {
      Swal.fire({
        title: "Error",
        text: error || "No se pudo iniciar sesión.",
        icon: "error",
        confirmButtonText: "Intentar de nuevo",
      });
    }
  };

  return (
    <S.LoginWrapper>
      <Card
        padding="3rem 2.5rem"
        borderRadius="20px"
        boxShadow="0 8px 28px rgba(0, 0, 0, 0.1)"
        maxWidth="460px"
      >
        <Typography as="h1" size="xl" weight="bold">
          Iniciar Sesión
        </Typography>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
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

          <Button type="submit" fullWidth>
            Entrar
          </Button>
        </S.Form>

        <S.Footer>
          ¿No tienes cuenta? <Link href="/register">Regístrate</Link>
        </S.Footer>
      </Card>
    </S.LoginWrapper>
  );
};

export default Login;
