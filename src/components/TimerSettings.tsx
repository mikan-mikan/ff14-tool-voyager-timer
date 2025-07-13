import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import TimerForm from "./TimerForm";
import Button from "./Button";
import ButtonWrap from "./ButtonWrap";
import { millisecondsToTimeParts, formatDateTimeLocal } from "../utils/time";
import type { Timer } from "../types/TimerTypes";
import PageTitle from "./PageTitle";
import PageSubTitle from "./PageSubTitle";

function calculateTimestamp(
  method: string,
  days: string,
  hours: string,
  minutes: string,
  absoluteTime: string
): number | null {
  if (method === "absolute") {
    return absoluteTime ? new Date(absoluteTime).getTime() : null;
  }
  const totalMilliseconds =
    (parseInt(days) || 0) * 86400000 +
    (parseInt(hours) || 0) * 3600000 +
    (parseInt(minutes) || 0) * 60000;
  return totalMilliseconds > 0 ? Date.now() + totalMilliseconds : null;
}

type TimerFormField = keyof Timer;

const TimerSettings: React.FC = () => {
  const [timers, setTimers] = useState<Timer[]>([
    { id: 1, method: "relative", days: "", hours: "", minutes: "", absoluteTime: "" },
    { id: 2, method: "relative", days: "", hours: "", minutes: "", absoluteTime: "" },
    { id: 3, method: "relative", days: "", hours: "", minutes: "", absoluteTime: "" },
    { id: 4, method: "relative", days: "", hours: "", minutes: "", absoluteTime: "" },
  ]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const newTimers: Timer[] = timers.map((timer) => {
      const timeParam = urlParams.get(`time${timer.id}`);
      if (timeParam) {
        const timestamp = parseInt(timeParam);
        const now = Date.now();
        const timeLeft = timestamp - now;
        if (timeLeft > 0) {
          const { days, hours, minutes } = millisecondsToTimeParts(timeLeft);
          const localDateTime = formatDateTimeLocal(new Date(timestamp));
          return {
            ...timer,
            method: "relative",
            days: String(days),
            hours: String(hours),
            minutes: String(minutes),
            absoluteTime: localDateTime,
          };
        }
      }
      return timer;
    });
    setTimers(newTimers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdateTimer = (id: number, field: TimerFormField, value: string) => {
    setTimers((prev) =>
      prev.map((timer) =>
        timer.id === id ? { ...timer, [field]: value } : timer
      )
    );
  };

  const handleSubmit = () => {
    let params: string[] = [];
    let hasInput = false;
    timers.forEach((timer) => {
      const timestamp = calculateTimestamp(
        timer.method,
        String(timer.days),
        String(timer.hours),
        String(timer.minutes),
        timer.absoluteTime
      );
      if (timestamp) {
        params.push(`time${timer.id}=${timestamp}`);
        hasInput = true;
      }
    });
    if (!hasInput) {
      alert("入力してください！");
      return;
    }
    window.location.href = `/timer?${params.join("&")}`;
  };

  const StyledLead = styled.p`
    margin: 0.5rem auto 0;
    color: var(--text-secondary);
    text-align: center;
  `;

  return (
    <div>
      <PageTitle>FF14 サブマリンボイジャー</PageTitle>
      <PageSubTitle>時間設定画面</PageSubTitle>
      <StyledLead>
        「残り時間」か「帰還予定時刻」を選択して、<br />時間を入力してください。<br
        />再設定時、時刻が過ぎている場合はリセットされています。
      </StyledLead>
      <div id="submarines">
        {timers.map((timer) => (
          <TimerForm
            key={timer.id}
            timer={timer}
            onUpdate={(field, value) =>
              handleUpdateTimer(timer.id, field, value)
            }
          />
        ))}
      </div>
      <ButtonWrap>
        <Button onClick={handleSubmit}>
          設定完了
        </Button>
      </ButtonWrap>
    </div>
  );
};

export default TimerSettings;
