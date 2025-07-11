import styled from "@emotion/styled";
import "@fontsource/zen-kaku-gothic-new";
import type { ButtonProps } from "../types/ButtonProps";

const StyledButton = styled.button`
  padding: 0.6rem 2rem;
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

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
