import styled from "@emotion/styled";
import "@fontsource/zen-kaku-gothic-new";
import type { ButtonProps } from "../types/ButtonProps";

const StyledButton = styled.button`
  background-color: var(--text-accent);
  color: var(--text-button);
  font-size: 0.875rem;
  font-weight: 700;
  padding: 0.75rem 3rem;
  border-radius: 0.5rem;
  border: none;
  box-shadow:
    0 0.25rem 0.375rem -0.0625rem rgba(173, 178, 212, 0.2),
    0 0.125rem 0.25rem -0.125rem rgba(173, 178, 212, 0.2);
  transition: all 0.3s;
  cursor: pointer;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: scale(1.05);
    }
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.25rem rgba(173, 178, 212, 0.4);
  }
`;

const Button = ({ children, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
