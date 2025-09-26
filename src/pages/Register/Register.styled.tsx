import styled from "styled-components";

export const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--color-secondary);
  padding: 1rem;
  font-family: var(--font-primary);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem; 
  width: 100%;
  margin-top: 1.5rem; 
`;

export const Footer = styled.div`
  margin-top: 1.5rem;
  font-size: var(--font-size-small);
  color: var(--color-text-light);
  text-align: center;

  a {
    color: var(--color-primary);
    font-weight: 500;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
