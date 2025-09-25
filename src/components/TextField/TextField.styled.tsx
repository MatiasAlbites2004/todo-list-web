import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 0 auto; 
`;

export const Label = styled.label`
  font-size: var(--font-size-small);
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: var(--color-text);
`;

export const StyledInput = styled.input<{ $error?: boolean }>`
  width: 100%;
  padding: 0.8rem;
  border-radius: var(--border-radius);
  border: 1px solid
    ${({ $error }) => ($error ? "red" : "var(--color-border)")};
  font-size: var(--font-size-medium);
  font-family: var(--font-primary);
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: ${({ $error }) =>
      $error ? "red" : "var(--color-primary)"};
    box-shadow: 0 0 0 2px
      ${({ $error }) => ($error ? "rgba(255,0,0,0.2)" : "rgba(79,70,229,0.2)")};
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: var(--font-size-small);
  margin: 0.25rem 0 0;
`;
