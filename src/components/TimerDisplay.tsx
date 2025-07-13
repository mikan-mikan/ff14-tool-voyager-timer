import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Button from "./Button";
import PageTitle from "./PageTitle";
import ButtonWrap from "./ButtonWrap";
import { millisecondsToTimeParts } from "../utils/time";
import PageSubTitle from "./PageSubTitle";

const StyledTimerTitle = styled.p`
  font-weight: bold;
  margin-bottom: 0;
`;
const StyledTimerData = styled.p`
  margin-top: 5px;
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
      <PageTitle>FF14 サブマリンボイジャー</PageTitle>
      <PageSubTitle>時間設定画面</PageSubTitle>
      <p>
        現在の時刻:{" "}
        {now
          ? new Date(now).toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })
          : "Loading..."}
      </p>
      <div>
        {timers.map((time, index) => {
          const id = index + 1;
          if (!time) {
            return (
              <div key={id}>
                <StyledTimerTitle>潜水艦{id}</StyledTimerTitle>
                <StyledTimerData id={`timer${id}`}>データがありません。</StyledTimerData>
              </div>
            );
          }
          const timestamp = parseInt(time);
          const currentNow = now || 0;
          const timeLeft = timestamp - currentNow;
          if (timeLeft > 0) {
            const { days, hours, minutes, seconds } = millisecondsToTimeParts(timeLeft);
            return (
              <div key={id}>
                <StyledTimerTitle>潜水艦{id}</StyledTimerTitle>
                <StyledTimerData id={`timer${id}`}>
                  残り時間: {days}日 {hours}時間 {minutes}分 {seconds}秒
                  <br />
                  (帰還予定時刻:{" "}
                  {new Date(timestamp).toLocaleString("ja-JP", {
                    timeZone: "Asia/Tokyo",
                  })}
                  )
                </StyledTimerData>
              </div>
            );
          } else {
            return (
              <div key={id}>
                <StyledTimerTitle>潜水艦{id}</StyledTimerTitle>
                <StyledTimerData id={`timer${id}`}>探索完了！</StyledTimerData>
              </div>
            );
          }
        })}
      </div>
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
