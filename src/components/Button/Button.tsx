import React from "react";
import * as S from "./Button.styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, fullWidth, ...props }) => {
  return (
    <S.StyledButton $fullWidth={fullWidth} {...props}>
      {children}
    </S.StyledButton>
  );
};

export default Button;
