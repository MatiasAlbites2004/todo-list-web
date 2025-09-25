import styled from "styled-components";

export const StyledButton = styled.button<{ $fullWidth?: boolean }>`
  background: var(--color-primary);
  color: white;
  font-weight: 600;
  font-size: var(--font-size-medium);
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1rem;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  &:hover {
    background: var(--color-primary-dark);
  }

  &:disabled {
    background: var(--color-disabled);
    cursor: not-allowed;
  }
`;
