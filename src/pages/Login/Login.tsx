import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/Button/Button";
import * as S from "./Login.styled";

// 📌 Definir el esquema con zod
const loginSchema = z.object({
  email: z.string().email("Correo inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

// 📌 Inferir el tipo desde el esquema
type LoginFormData = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login data:", data);
  };

  return (
    <S.LoginWrapper>
      <S.Title>Iniciar Sesión</S.Title>

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Input
          type="email"
          placeholder="Correo electrónico"
          {...register("email")}
          $error={!!errors.email}
        />
        {errors.email && (
          <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
        )}

        <S.Input
          type="password"
          placeholder="Contraseña"
          {...register("password")}
          $error={!!errors.password}
        />
        {errors.password && (
          <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
        )}

        <Button type="submit">Entrar</Button>
      </S.Form>

      <S.TextCenter>
        ¿No tienes cuenta? <a href="/register">Regístrate</a>
      </S.TextCenter>
    </S.LoginWrapper>
  );
};

export default Login;
