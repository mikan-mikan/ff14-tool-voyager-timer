import React from "react";
import styled from "@emotion/styled";
import "@fontsource/zen-kaku-gothic-new";

const StyledButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 2rem;
  cursor: pointer;
  background-color: var(--color-white);
  border: 1px solid var(--color-text);
  transition: all 0.1s ease-in-out;
  font-size: 1.2rem;
  font-family: "Zen Kaku Gothic New";
  color: var(--color-text);

  @media (hover: hover) {
    &:hover,
    &:focus {
      background-color: var(--color-link);
      color: var(--color-white);
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

`;

const Button = ({ children, onClick, className }) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
};

export default Button;
