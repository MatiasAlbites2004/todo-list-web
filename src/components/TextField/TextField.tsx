import React from "react";
import styled from "styled-components";

interface Props {
  type?: "text" | "email" | "password";
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 0.8rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
  font-size: var(--font-size-medium);
  font-family: var(--font-primary);
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const TextField: React.FC<Props> = ({ type = "text", value, placeholder, onChange }) => {
  return <StyledInput type={type} value={value} placeholder={placeholder} onChange={onChange} />;
};

export default TextField;
