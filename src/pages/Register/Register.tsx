import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./registerSchema";
import type { RegisterFormValues } from "./registerSchema";

import Card from "../../components/Card/Card";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import Typography from "../../components/Typography/Typography";
import Link from "../../components/Link/Link";
import * as S from "./Register.styled";

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormValues) => {
    console.log("Datos enviados:", data);
  };

  return (
    <S.RegisterWrapper>
      <Card
        padding="2.5rem"
        borderRadius="16px"
        boxShadow="0 4px 20px rgba(0,0,0,0.08)"
        maxWidth="420px"
      >
        <Typography
          as="h1"
          size="xl"
          weight="bold"
          className="register-title"
        >
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
