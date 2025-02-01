import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 2rem;
  border-radius: 0.3rem;
  cursor: pointer;
  background-color: var(--color-white);
  border: 1px solid var(--color-text);
  transition: all 0.1s ease-in-out;
  font-size: 1.2rem;
  color: var(--color-text);

  @media (hover: hover) {
    &:hover,
    &:focus {
      border: 1px solid var(--color-link);
      background-color: var(--color-link);
      color: var(--color-white);
    }
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
