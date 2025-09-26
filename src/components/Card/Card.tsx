import React, { type FC, type ReactNode } from "react";
import { CardContainer } from "./Card.styled";

interface CardProps {
  children: ReactNode;
  padding?: string;
  bgColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  maxWidth?: string;
}

const Card: FC<CardProps> = ({
  children,
  padding,
  bgColor,
  borderRadius,
  boxShadow,
  maxWidth,
}) => {
  return (
    <CardContainer
      padding={padding}
      bgColor={bgColor}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      maxWidth={maxWidth}
    >
      {children}
    </CardContainer>
  );
};

export default Card;
