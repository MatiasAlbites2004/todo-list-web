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

export const Input = styled.input`
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

export const TextCenter = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: var(--font-size-small);
  color: var(--color-text-light);
`;
