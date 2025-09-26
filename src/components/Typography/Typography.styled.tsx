import styled, { css } from "styled-components";

type FontSize = "sm" | "md" | "lg" | "xl";
type FontWeight = "normal" | "bold";

interface TypographyProps {
  $size?: FontSize;
  $weight?: FontWeight;
  $color?: string;
}

const fontSizes: Record<FontSize, string> = {
  sm: "0.875rem", 
  md: "1rem",    
  lg: "1.5rem",   
  xl: "2rem",     
};

export const TypographyStyled = styled.p<TypographyProps>`
  font-family: var(--font-primary);
  margin: 0;

  ${({ $size = "md" }) => css`
    font-size: ${fontSizes[$size]};
  `}

  ${({ $weight = "normal" }) => css`
    font-weight: ${$weight};
  `}

  ${({ $color }) =>
    $color &&
    css`
      color: ${$color};
    `}
`;
