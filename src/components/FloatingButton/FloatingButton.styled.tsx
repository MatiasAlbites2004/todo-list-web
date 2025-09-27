import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #0056b3;
  }

  span {
    display: none; /* Si quieres texto, cámbialo a inline */
    margin-left: 8px;
  }
`;
