import React from "react";
import styled from "@emotion/styled";

const StyledContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: .5rem;
`;

const StyledLabel = styled.label`
`;

const StyledInputField = styled.input`
  width: 3rem;
  padding: 0.5rem;
  font-size: 1.3rem;
  transition: background-color 0.3s;
  &:focus {
    background-color: var(--color-lightblue);
  }
  &::placeholder {
    color: var(--color-lightgray);
  }
`;

const RemainingTimeInput = ({ id, days, hours, minutes, onUpdate }) => (
  <StyledContainer id={`remaining-time-inputs-${id}`}>
    <StyledLabel>
      <StyledInputField
        type="number"
        value={days}
        placeholder="0"
        onChange={(e) => onUpdate("days", e.target.value)}
      />
      日
    </StyledLabel>
    <StyledLabel>
      <StyledInputField
        type="number"
        value={hours}
        placeholder="0"
        onChange={(e) => onUpdate("hours", e.target.value)}
      />
      時間
    </StyledLabel>
    <StyledLabel>
      <StyledInputField
        type="number"
        value={minutes}
        placeholder="0"
        onChange={(e) => onUpdate("minutes", e.target.value)}
      />
      分
    </StyledLabel>
  </StyledContainer>
);

export default RemainingTimeInput;
