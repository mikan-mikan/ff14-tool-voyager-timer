import React from "react";

import type { RemainingTimeInputProps } from "../types/TimerTypes";
import NumberField from "./NumberField";
import styled from "@emotion/styled";

const StyledContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;

const RemainingTimeInput = ({ id, days, hours, minutes, onUpdate }: RemainingTimeInputProps) => (
  <StyledContainer id={`remaining-time-inputs-${id}`}>
    <NumberField
      type="number"
      id={`${id}-day`}
      value={days}
      placeholder=" "
      label="日"
      min={0}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onUpdate("days", e.target.value)}
    />
    <NumberField
      type="number"
      id={`${id}-hour`}
      value={hours}
      placeholder=" "
      label="時間"
      min={0}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onUpdate("hours", e.target.value)}
    />
    <NumberField
      type="number"
      id={`${id}-min`}
      value={minutes}
      placeholder=" "
      label="分"
      min={0}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onUpdate("minutes", e.target.value)}
    />
  </StyledContainer>
);

export default RemainingTimeInput;
