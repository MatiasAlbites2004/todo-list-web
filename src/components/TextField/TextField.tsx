import React from "react";
import * as S from "./TextField.styled";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const TextField = React.forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...props }, ref) => {
    return (
      <S.Wrapper>
        {label && <S.Label>{label}</S.Label>}
        <S.StyledInput ref={ref} {...props} $error={!!error} />
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      </S.Wrapper>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
