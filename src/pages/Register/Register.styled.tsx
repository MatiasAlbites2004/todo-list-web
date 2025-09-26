import styled from "styled-components";

export const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--color-secondary);
  font-family: var(--font-primary);
  padding: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const Footer = styled.div`
  margin-top: 1rem;
  font-size: var(--font-size-small);
  color: var(--color-text-light);
  text-align: center;

  a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;
