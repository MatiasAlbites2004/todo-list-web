import React from "react";
import * as S from "./Container.styled";

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: string;
  padding?: string;
}

const Container: React.FC<ContainerProps> = ({ children, maxWidth, padding }) => {
  return (
    <S.StyledContainer maxWidth={maxWidth} padding={padding}>
      {children}
    </S.StyledContainer>
  );
};

export default Container;
