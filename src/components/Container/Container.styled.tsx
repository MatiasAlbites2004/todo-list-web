import styled from "styled-components";

export const StyledContainer = styled.div<{ maxWidth?: string; padding?: string }>`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ maxWidth }) => maxWidth || "1200px"};
  padding: ${({ padding }) => padding || "1rem"};
  box-sizing: border-box;
`;
