import React from "react";
import styled from "styled-components";

interface Props {
  href: string;
  children: React.ReactNode;
  target?: string;
}

const StyledLink = styled.a`
  color: #4f46e5;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Link: React.FC<Props> = ({ href, children, target = "_self" }) => {
  return (
    <StyledLink href={href} target={target}>
      {children}
    </StyledLink>
  );
};

export default Link;
