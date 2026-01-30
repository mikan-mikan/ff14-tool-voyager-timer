import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import TimerForm from "./TimerForm";
import Button from "./Button";
import ButtonWrap from "./ButtonWrap";
import { millisecondsToTimeParts, formatDateTimeLocal } from "../utils/time";
import type { Timer } from "../types/TimerTypes";
import PageTitle from "./PageTitle";
import PageSubTitle from "./PageSubTitle";
import PageHeader from "./PageHeader";

const MIN_SUBMARINES = 4;
const MAX_SUBMARINES = 24;

const StyledLead = styled.p`
  margin: 0.5rem auto 0;
  color: var(--text-secondary);
  text-align: center;
`;

const StyledCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledAddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  border: 2px dashed var(--border-primary);
  border-radius: 0.75rem;
  background-color: transparent;
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    border-color: var(--text-primary);
    color: var(--text-primary);
    background-color: var(--bg-card);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledSubmarineCount = styled.span`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-left: 0.5rem;
`;

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

const createEmptyTimer = (id: number): Timer => ({
  id,
  method: "relative",
  days: "",
  hours: "",
  minutes: "",
  absoluteTime: "",
});

const TimerSettings: React.FC = () => {
  const [timers, setTimers] = useState<Timer[]>(() => {
    return Array.from({ length: MIN_SUBMARINES }, (_, i) => createEmptyTimer(i + 1));
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    // URLからcount（隻数）を取得、なければ4隻
    const countParam = urlParams.get("count");
    const count = countParam
      ? Math.min(Math.max(parseInt(countParam) || MIN_SUBMARINES, MIN_SUBMARINES), MAX_SUBMARINES)
      : MIN_SUBMARINES;

    // count分のタイマーを生成
    const initialTimers = Array.from({ length: count }, (_, i) => createEmptyTimer(i + 1));

    // URLパラメータから時間データを復元
    const newTimers = initialTimers.map((timer) => {
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
            method: "relative" as const,
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
  }, []);

  const handleUpdateTimer = (id: number, field: TimerFormField, value: string) => {
    setTimers((prev) =>
      prev.map((timer) => (timer.id === id ? { ...timer, [field]: value } : timer))
    );
  };

  const handleAddSubmarine = () => {
    if (timers.length >= MAX_SUBMARINES) return;
    setTimers((prev) => [...prev, createEmptyTimer(prev.length + 1)]);
  };

  const handleRemoveSubmarine = (id: number) => {
    if (timers.length <= MIN_SUBMARINES) return;
    if (!window.confirm(`潜水艦${id}を削除しますか？`)) return;

    setTimers((prev) => {
      const filtered = prev.filter((timer) => timer.id !== id);
      // IDを振り直す
      return filtered.map((timer, index) => ({ ...timer, id: index + 1 }));
    });
  };

  const handleSubmit = () => {
    let params: string[] = [];
    let hasInput = false;

    // 隻数をパラメータに追加
    params.push(`count=${timers.length}`);

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

  return (
    <div>
      <PageHeader>
        <PageTitle>FF14 サブマリンボイジャー</PageTitle>
        <PageSubTitle>時間設定画面</PageSubTitle>
        <StyledLead>
          「残り時間」か「帰還予定時刻」を選択して、
          <br />
          時間を入力してください。
          <br />
          再設定時、時刻が過ぎている場合はリセットされています。
        </StyledLead>
      </PageHeader>
      <StyledCardWrap>
        {timers.map((timer) => (
          <TimerForm
            key={timer.id}
            timer={timer}
            onUpdate={(field, value) => handleUpdateTimer(timer.id, field, value)}
            onRemove={() => handleRemoveSubmarine(timer.id)}
            canRemove={timers.length > MIN_SUBMARINES}
          />
        ))}
        <StyledAddButton onClick={handleAddSubmarine} disabled={timers.length >= MAX_SUBMARINES}>
          ＋ 潜水艦を追加
          <StyledSubmarineCount>
            ({timers.length}/{MAX_SUBMARINES})
          </StyledSubmarineCount>
        </StyledAddButton>
      </StyledCardWrap>
      <ButtonWrap>
        <Button onClick={handleSubmit}>設定完了</Button>
      </ButtonWrap>
    </div>
  );
};

export default TimerSettings;
