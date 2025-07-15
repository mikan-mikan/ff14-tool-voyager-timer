import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Button from "./Button";
import PageTitle from "./PageTitle";
import ButtonWrap from "./ButtonWrap";
import { millisecondsToTimeParts } from "../utils/time";
import PageSubTitle from "./PageSubTitle";
import CardTitle from "./CardTitle";

const StyledHeader = styled.div`
  margin-bottom: 2rem;
`;

const StyledTimerData = styled.p`
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin: 0;
`;
const StyledPageTime = styled.p`
  margin: 0.5rem auto 0;
  color: var(--text-secondary);
  text-align: center;
  max-width: 32rem;
`;
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  border-bottom: .15rem solid var(--border-primary);
  padding-bottom: 1rem;
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: var(--bg-card);
  border: 1px solid var(--border-primary);
  border-radius: 0.75rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s;
`;


const TimerDisplay: React.FC = () => {
  const [timers, setTimers] = useState<(string|null)[]>([]);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const timerData: (string|null)[] = [];
    for (let i = 1; i <= 4; i++) {
      timerData.push(urlParams.get(`time${i}`));
    }
    setTimers(timerData);
  }, []);

  useEffect(() => {
    setNow(Date.now());
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const goToSetTime = () => {
    window.location.href = "/" + window.location.search;
  };

  const urlCopy = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert("URLをコピーしました！");
  };

  return (
    <div>
      <StyledHeader>
        <PageTitle>FF14 サブマリンボイジャー</PageTitle>
        <PageSubTitle>運行状況</PageSubTitle>
        <StyledPageTime>
          現在の時刻:{" "}
          {now
            ? new Date(now).toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })
            : "Loading..."}
        </StyledPageTime>
      </StyledHeader>
      <PageContainer>
        {timers.map((time, index) => {
          const id = index + 1;
          if (!time) {
            return (
              <StyledCard key={id}>
                <CardTitle>潜水艦{id}</CardTitle>
                <StyledTimerData id={`timer${id}`}>データがありません。</StyledTimerData>
              </StyledCard>
            );
          }
          const timestamp = parseInt(time);
          const currentNow = now || 0;
          const timeLeft = timestamp - currentNow;
          if (timeLeft > 0) {
            const { days, hours, minutes, seconds } = millisecondsToTimeParts(timeLeft);
            return (
              <StyledCard key={id}>
                <CardTitle>潜水艦{id}</CardTitle>
                <StyledTimerData id={`timer${id}`}>
                  残り時間: {days}日 {hours}時間 {minutes}分 {seconds}秒
                  <br />
                  (帰還予定時刻:{" "}
                  {new Date(timestamp).toLocaleString("ja-JP", {
                    timeZone: "Asia/Tokyo",
                  })}
                  )
                </StyledTimerData>
              </StyledCard>
            );
          } else {
            return (
              <StyledCard key={id}>
                <CardTitle>潜水艦{id}</CardTitle>
                <StyledTimerData id={`timer${id}`}>探索完了！</StyledTimerData>
              </StyledCard>
            );
          }
        })}
      </PageContainer>
      <ButtonWrap>
        <Button onClick={goToSetTime}>
          時間を変更する
        </Button>
        <Button onClick={urlCopy}>
          URLをコピーする
        </Button>
      </ButtonWrap>
    </div>
  );
};

export default TimerDisplay;
