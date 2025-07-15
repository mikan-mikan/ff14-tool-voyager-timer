import React from "react";
import styled from "@emotion/styled";
import RemainingTimeInput from "./RemainingTimeInput";
import CalendarInput from "./CalendarInput";
import type { TimerFormProps } from "../types/TimerTypes";
import CardTitle from "./CardTitle";


const StyledInputBoxes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const StyledRadioBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--bg-toggle-base);
  padding: 0.25rem;
`;
const StyledInputRadio = styled.input`
  position: absolute;
  opacity: 0;
`;
const StyledLabel = styled.label<{ checked?: boolean }>`
  display: block;
  width: 100%;
  text-align: center;
  padding: 0.5rem 0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  color: ${({ checked }) => checked ? "var(--text-toggle-active)" : "var(--text-toggle)"};
  background-color: ${({ checked }) => checked ? "var(--bg-toggle-active)" : "transparent"};
  box-shadow: ${({ checked }) => checked ? "var(--shadow-sm)" : "none"};
  transition: all 0.2s;
`;
const StyledCard = styled.div`
  background-color: var(--bg-card);
  border: 1px solid var(--border-primary);
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s;
  input:focus-visible + label {
    outline: 2px solid var(--text-primary);
    outline-offset: 2px;
  }
`;

const TimerForm = ({ timer, onUpdate }: TimerFormProps) => {
  const { id, method, days, hours, minutes, absoluteTime } = timer;
  return (
    <StyledCard>
      <CardTitle>潜水艦{id}</CardTitle>
      <StyledInputBoxes>
      <StyledRadioBox>
        <div style={{ position: 'relative' }}>
          <StyledInputRadio
            id={`relative${id}`}
            type="radio"
            name={`method${id}`}
            value="relative"
            checked={method === "relative"}
            onChange={() => onUpdate("method", "relative")}
          />
          <StyledLabel
            htmlFor={`relative${id}`}
            checked={method === "relative"}
          >
            残り時間
          </StyledLabel>
        </div>
        <div style={{ position: 'relative' }}>
          <StyledInputRadio
            id={`absolute${id}`}
            type="radio"
            name={`method${id}`}
            value="absolute"
            checked={method === "absolute"}
            onChange={() => onUpdate("method", "absolute")}
          />
          <StyledLabel
            htmlFor={`absolute${id}`}
            checked={method === "absolute"}
          >
            帰還予定時刻
          </StyledLabel>
        </div>
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
    </StyledCard>
  );
};

export default TimerForm;
