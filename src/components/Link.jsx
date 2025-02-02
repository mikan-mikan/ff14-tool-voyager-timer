import React from "react";
import styled from "@emotion/styled";
import "@fontsource/zen-kaku-gothic-new";

const StyledLink = styled.a`
  color: var(--color-link);
  text-decoration: underline;
  @media (hover: hover) {
    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
`;

const Link = ({ children, target = '_self', href, ...props}) => {
  return (
    <StyledLink href={href} target={target} {...props}>
      {children}
    </StyledLink>
  );
};

export default Link;
