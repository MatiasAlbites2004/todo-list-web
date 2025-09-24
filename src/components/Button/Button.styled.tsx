import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--color-button);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  font-weight: 600;
  font-family: var(--font-primary);
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-button-hover);
  }
`;
