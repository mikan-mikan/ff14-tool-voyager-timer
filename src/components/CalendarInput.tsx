import React from "react";
import styled from "@emotion/styled";
import type { CalendarInputProps } from "../types/TimerTypes";

const StyledCalendarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCalendarField = styled.input`
  color-scheme: light;
  display: block;
  width: 100%;
  max-width: 18rem;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-size: 1rem;
  color: var(--text-primary);
  background-color: var(--bg-input);
  border: 1px solid var(--border-input);
  transition: all 0.2s;
  &:focus {
    outline: none;
    border-color: var(--border-input);
    box-shadow: 0 0 0 3px rgba(173, 178, 212, 0.4);
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
