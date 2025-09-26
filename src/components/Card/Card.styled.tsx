import styled from "styled-components";

export const CardContainer = styled.div<{
  padding?: string;
  bgColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  maxWidth?: string;
}>`
  padding: ${({ padding }) => padding || "2rem"};
  background-color: ${({ bgColor }) => bgColor || "var(--color-white)"};
  border-radius: ${({ borderRadius }) => borderRadius || "12px"};
  box-shadow: ${({ boxShadow }) => boxShadow || "0 4px 12px rgba(0, 0, 0, 0.1)"};
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || "400px"};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    padding: 2rem;
    max-width: 95%;
  }
`;
