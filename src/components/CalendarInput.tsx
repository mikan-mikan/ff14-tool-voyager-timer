import React from "react";
import styled from "@emotion/styled";
import type { CalendarInputProps } from "../types/TimerTypes";

const StyledCalendarContainer = styled.div`
  margin-top: 0.5rem;
`;

const StyledCalendarField = styled.input`
  padding: 0.5rem;
  font-size: 1.3rem;
  width: auto;
  transition: background-color 0.3s;
  &:focus {
    background-color: var(--color-lightblue);
  }
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CalendarInput = ({ id, absoluteTime, onUpdate }: CalendarInputProps) => (
  <StyledCalendarContainer id={`calendar-input-${id}`}>
    <StyledCalendarField
      type="datetime-local"
      value={absoluteTime}
      onChange={(e) => onUpdate("absoluteTime", e.target.value)}
    />
  </StyledCalendarContainer>
);

export default CalendarInput;
