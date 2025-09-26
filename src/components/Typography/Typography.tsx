import React from "react";
import { TypographyStyled } from "./Typography.styled";

type FontSize = "sm" | "md" | "lg" | "xl";
type FontWeight = "normal" | "bold";

interface TypographyProps {
  children: React.ReactNode;
  as?: React.ElementType;
  size?: FontSize;
  weight?: FontWeight;
  color?: string;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  as = "p",
  size = "md",
  weight = "normal",
  color,
  className,
}) => {
  return (
    <TypographyStyled
      as={as}
      $size={size}
      $weight={weight}
      $color={color}
      className={className}
    >
      {children}
    </TypographyStyled>
  );
};

export default Typography;
