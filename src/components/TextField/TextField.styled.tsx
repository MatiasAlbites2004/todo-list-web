import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledInput = styled.input<{ $error?: boolean }>`
  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid ${({ $error }) => ($error ? "red" : "var(--color-border)")};
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: ${({ $error }) => ($error ? "red" : "var(--color-primary)")};
    box-shadow: 0 0 0 2px
      ${({ $error }) => ($error ? "rgba(255,0,0,0.2)" : "rgba(79,70,229,0.2)")};
  }
`;

export const StyledTextarea = styled.textarea<{ $error?: boolean }>`
  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid ${({ $error }) => ($error ? "red" : "var(--color-border)")};
  font-size: 1rem;
  min-height: 120px;
  max-height: 200px;
  resize: vertical;
  overflow-y: auto;
  outline: none;

  &:focus {
    border-color: ${({ $error }) => ($error ? "red" : "var(--color-primary)")};
    box-shadow: 0 0 0 2px
      ${({ $error }) => ($error ? "rgba(255,0,0,0.2)" : "rgba(79,70,229,0.2)")};
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;
