import React from "react";
import type { CSSProperties } from "react";
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
  style?: CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  as = "p",
  size = "md",
  weight = "normal",
  color,
  className,
  style, 
}) => {
  return (
    <TypographyStyled
      as={as}
      $size={size}
      $weight={weight}
      $color={color}
      className={className}
      style={style}
    >
      {children}
    </TypographyStyled>
  );
};

export default Typography;
