import React from "react";
import styled from "@emotion/styled";
import "@fontsource/zen-kaku-gothic-new";
import type { LinkProps } from "../types/LinkProps";

const StyledLink = styled.a`
  color: var(--text-secondary);
  text-decoration: underline;
  @media (hover: hover) {
    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
`;

const Link = ({ children, target = '_self', href, ...props }: LinkProps) => {
  return (
    <StyledLink href={href} target={target} {...props}>
      {children}
    </StyledLink>
  );
};

export default Link;
