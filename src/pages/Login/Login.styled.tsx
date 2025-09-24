import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: var(--color-secondary);
  padding: 2rem;
  font-family: var(--font-primary);
`;

export const Title = styled.h1`
  color: var(--color-text);
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 320px;
`;

// 👇 $error tipado como boolean
export const Input = styled.input<{ $error?: boolean }>`
  width: 100%;
  max-width: 300px;
  padding: 0.8rem;
  border-radius: var(--border-radius);
  border: 1px solid
    ${({ $error }) => ($error ? "red" : "var(--color-border)")};
  font-size: var(--font-size-medium);
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: ${({ $error }) =>
      $error ? "red" : "var(--color-primary)"};
    box-shadow: 0 0 0 2px
      ${({ $error }) => ($error ? "rgba(255,0,0,0.2)" : "rgba(79,70,229,0.2)")};
  }
`;

export const TextCenter = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: var(--font-size-small);
  color: var(--color-text-light);
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: var(--font-size-small);
  margin: 0.25rem 0 0;
`;
