import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Button from "./Button.jsx";
import PageTitle from "./PageTitle.jsx";
import ButtonWrap from "./ButtonWrap.jsx";

const StyledContainer = styled.div`
`;

const StyledTimerTitle = styled.p`
  font-weight: bold;
  margin-bottom: 0;
`;

const StyledTimerData = styled.p`
  margin-top: 5px;
`;

const TimerDisplay = () => {
  const [timers, setTimers] = useState([]);
  const [now, setNow] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const timerData = [];
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
    <StyledContainer>
      <PageTitle>FF14 サブマリンボイジャー運行状況</PageTitle>
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
            const days = Math.floor(timeLeft / 86400000);
            const hours = Math.floor((timeLeft % 86400000) / 3600000);
            const minutes = Math.floor((timeLeft % 3600000) / 60000);
            const seconds = Math.floor((timeLeft % 60000) / 1000);
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
    </StyledContainer>
  );
};

export default TimerDisplay;
