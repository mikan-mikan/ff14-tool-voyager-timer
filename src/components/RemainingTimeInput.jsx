import React from "react";
import styled from "@emotion/styled";

const RemainingTimeContainer = styled.div`
  padding: 0.5rem;
`;

const Label = styled.label`
  margin-right: 1rem;
`;

const InputField = styled.input`
  width: 3rem;
  padding: 0.5rem;
  font-size: 1.3rem;
  transition: background-color 0.3s;
  &:focus {
    background-color: var(--color-lightblue);
  }
`;

const RemainingTimeInput = ({ id, days, hours, minutes, onUpdate }) => (
  <RemainingTimeContainer id={`remaining-time-inputs-${id}`}>
    <Label>
      <InputField
        type="number"
        value={days}
        placeholder="0"
        onChange={(e) => onUpdate("days", e.target.value)}
      />
      日
    </Label>
    <Label>
      <InputField
        type="number"
        value={hours}
        placeholder="0"
        onChange={(e) => onUpdate("hours", e.target.value)}
      />
      時間
    </Label>
    <Label>
      <InputField
        type="number"
        value={minutes}
        placeholder="0"
        onChange={(e) => onUpdate("minutes", e.target.value)}
      />
      分
    </Label>
  </RemainingTimeContainer>
);

export default RemainingTimeInput;
