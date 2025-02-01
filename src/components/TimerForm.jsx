import React from "react";
import styled from "@emotion/styled";
import RemainingTimeInput from "./RemainingTimeInput.jsx";
import CalendarInput from "./CalendarInput.jsx";

const Title = styled.h2`
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  font-weight: bold;
`;

const InputBoxes = styled.div`
  padding-left: 0.5rem;
`;

const RadioBox = styled.div`
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;

const TimerForm = ({ timer, onUpdate }) => {
  const { id, method, days, hours, minutes, absoluteTime } = timer;
  return (
    <div>
      <Title>潜水艦{id}</Title>
      <InputBoxes>
        <RadioBox>
          <label>
            <input
              type="radio"
              name={`method${id}`}
              value="relative"
              checked={method === "relative"}
              onChange={() => onUpdate("method", "relative")}
            />
            残り時間
          </label>
          <label>
            <input
              type="radio"
              name={`method${id}`}
              value="absolute"
              checked={method === "absolute"}
              onChange={() => onUpdate("method", "absolute")}
            />
            帰還予定時刻
          </label>
        </RadioBox>
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
      </InputBoxes>
    </div>
  );
};

export default TimerForm;
