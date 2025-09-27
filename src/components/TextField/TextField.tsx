import React from "react";
import * as S from "./TextField.styled";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  multiline?: boolean;
}

const TextField = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
  ({ error, multiline, ...props }, ref) => {
    return (
      <S.Wrapper>
        {multiline ? (
          <S.StyledTextarea
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            $error={!!error}
          />
        ) : (
          <S.StyledInput ref={ref as React.Ref<HTMLInputElement>} {...props} $error={!!error} />
        )}
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      </S.Wrapper>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
