import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { RegisterFormValues } from "./registerSchema.ts";
import { registerSchema } from "./registerSchema.ts";

import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import TextField from "../../components/TextField/TextField";
import Link from "../../components/Link/Link";
import Typography from "../../components/Typography/Typography";

import * as S from "./Register.styled";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormValues) => {
    console.log(" Datos enviados:", data);
  };

  return (
    <S.RegisterWrapper>
      <Card maxWidth="400px" padding="2.5rem">
        <Typography as="h1" size="xl" weight="bold" style={{ marginBottom: "2rem" }}>
          Crear cuenta
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

          <Button type="submit" fullWidth>
            Registrarme
          </Button>
        </S.Form>

        <S.Footer>
          ¿Ya tienes cuenta? <Link href="/login">Inicia sesión</Link>
        </S.Footer>
      </Card>
    </S.RegisterWrapper>
  );
};

export default Register;
