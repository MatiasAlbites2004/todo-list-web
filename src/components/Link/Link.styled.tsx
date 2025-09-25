import styled from "styled-components";

export const StyledLink = styled.a`
  color: var(--color-primary);
  font-size: var(--font-size-small);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
