import React from "react";
import styled from "@emotion/styled";

const CalendarContainer = styled.div`
  padding: 0.5rem;
`;

const CalendarField = styled.input`
  padding: 0.5rem;
  font-size: 1.3rem;
  width: auto;
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
