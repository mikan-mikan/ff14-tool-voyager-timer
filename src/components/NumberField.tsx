import React from "react";
import styled from "@emotion/styled";
import type { FormFieldProps } from "../types/Common";

const StyledFormField = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  display: block;
  max-width: 6rem;
  border-radius: 0.5rem;
  padding: 1.5rem 0.625rem 0.625rem;
  text-align: center;
  font-size: 1rem;
  color: var(--text-primary);
  background-color: var(--bg-input);
  border: 1px solid var(--border-input);
  appearance: none;
  transition: all 0.2s;
  &:focus {
    outline: none;
    border-color: var(--border-input);
    box-shadow: 0 0 0 3px rgba(173, 178, 212, 0.4);
  }
  @media (max-width: 768px) {
    max-width: 3rem;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  font-size: 0.875rem;
  color: var(--text-secondary);
  transition: all 0.3s;
  transform: translateY(-1rem) scale(0.75);
  top: 1.25rem;
  left: 50%;
  transform-origin: center;
  z-index: 10;
  pointer-events: none;

  input:placeholder-shown + & {
    transform: translateY(0) scale(1);
  }

  input:focus + & {
    transform: translateY(-1rem) scale(0.75);
  }
`;

const NumberField = ({ label, id, ...inputProps }: FormFieldProps) => {
  return (
    <StyledFormField>
      <StyledInput id={id} placeholder=" " {...inputProps} />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </StyledFormField>
  );
};

export default NumberField;
