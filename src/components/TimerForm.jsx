import React from "react";
import styled from "@emotion/styled";
import RemainingTimeInput from "./RemainingTimeInput.jsx";
import CalendarInput from "./CalendarInput.jsx";

const StyledTitle = styled.h2`
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const StyledInputBoxes = styled.div`
  padding-left: 0.5rem;
`;

const StyledRadioBox = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;
const StyledLabel = styled.label`
  font-size: 1rem;
  transition: color 0.2s;
  &:has(input:checked) {
    font-weight: bold;
  }
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: var(--color-link);
    }
  }
`;

const TimerForm = ({ timer, onUpdate }) => {
  const { id, method, days, hours, minutes, absoluteTime } = timer;
  return (
    <div>
      <StyledTitle>潜水艦{id}</StyledTitle>
      <StyledInputBoxes>
        <StyledRadioBox>
          <StyledLabel>
            <input
              type="radio"
              name={`method${id}`}
              value="relative"
              checked={method === "relative"}
              onChange={() => onUpdate("method", "relative")}
            />
            残り時間
          </StyledLabel>
          <StyledLabel>
            <input
              type="radio"
              name={`method${id}`}
              value="absolute"
              checked={method === "absolute"}
              onChange={() => onUpdate("method", "absolute")}
            />
            帰還予定時刻
          </StyledLabel>
        </StyledRadioBox>
        {method === "relative" ? (
          <RemainingTimeInput
            id={id}
            days={days}
            hours={hours}
            minutes={minutes}
            onUpdate={onUpdate}
          />
        ) : (
          <CalendarInput
            id={id}
            absoluteTime={absoluteTime}
            onUpdate={onUpdate}
          />
        )}
      </StyledInputBoxes>
    </div>
  );
};

export default TimerForm;
