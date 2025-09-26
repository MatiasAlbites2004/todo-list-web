import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { LoginFormValues } from "./loginSchema";
import { loginSchema } from "./loginSchema";

import Button from "../../components/Button/Button";
import TextField from "../../components/TextField/TextField";
import Link from "../../components/Link/Link";
import Typography from "../../components/Typography/Typography";
import * as S from "./Login.styled";
import Card from "../../components/Card/Card";

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Datos enviados:", data);
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
