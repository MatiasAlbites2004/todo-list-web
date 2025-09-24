import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  maxWidth?: string;
  padding?: string;
}

const StyledContainer = styled.div<{ maxWidth?: string; padding?: string }>`
  width: 100%;
  max-width: ${(props) => props.maxWidth || "1200px"};
  padding: ${(props) => props.padding || "2rem"};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container: React.FC<Props> = ({ children, maxWidth, padding }) => {
  return (
    <StyledContainer maxWidth={maxWidth} padding={padding}>
      {children}
    </StyledContainer>
  );
};

export default Container;
