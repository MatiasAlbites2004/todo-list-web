import React from "react";
import { StyledLink } from "./Link.styled";

interface Props {
  href: string;
  children: React.ReactNode;
  target?: string;
}

const Link: React.FC<Props> = ({ href, children, target }) => {
  return (
    <StyledLink href={href} target={target}>
      {children}
    </StyledLink>
  );
};

export default Link;
