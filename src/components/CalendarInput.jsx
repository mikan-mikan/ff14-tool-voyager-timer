import React from "react";
import styled from "@emotion/styled";

const CalendarContainer = styled.div`
  margin-top: 0.5rem;
`;

const CalendarField = styled.input`
  padding: 0.5rem;
  font-size: 1.3rem;
  width: auto;
  transition: background-color 0.3s;
  &:focus {
    background-color: var(--color-lightblue);
  }
`;

const CalendarInput = ({ id, absoluteTime, onUpdate }) => (
  <CalendarContainer id={`calendar-input-${id}`}>
    <CalendarField
      type="datetime-local"
      value={absoluteTime}
      onChange={(e) => onUpdate("absoluteTime", e.target.value)}
    />
  </CalendarContainer>
);

export default CalendarInput;
