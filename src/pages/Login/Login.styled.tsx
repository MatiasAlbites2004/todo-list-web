import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--color-secondary);
  font-family: var(--font-primary);
  padding: 2rem;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 3rem 2.5rem;
  width: 100%;
  max-width: 460px; 
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    padding: 2rem;
    max-width: 95%;
  }
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 2rem; 
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-top: 1.5rem; 
`;


export const Footer = styled.div`
  margin-top: 2rem;
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
