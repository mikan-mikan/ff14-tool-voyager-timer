import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Button from "./Button.jsx";

const Container = styled.div`
  /* 必要に応じて全体のコンテナスタイルを追加 */
`;

const Header = styled.h1`
  margin-bottom: 1rem;
`;

const TimerTitle = styled.p`
  font-weight: bold;
  margin-bottom: 0;
`;

const TimerData = styled.p`
  margin-top: 5px;
`;

const TimerDisplay = () => {
  const [timers, setTimers] = useState([]);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const timerData = [];
    for (let i = 1; i <= 4; i++) {
      timerData.push(urlParams.get(`time${i}`));
    }
    setTimers(timerData);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Header>FF14 サブマリンボイジャー運行状況</Header>
      <p>
        現在の時刻:{" "}
        {new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })}
      </p>
      <div>
        {timers.map((time, index) => {
          const id = index + 1;
          if (!time) {
            return (
              <div key={id}>
                <TimerTitle>潜水艦{id}</TimerTitle>
                <TimerData id={`timer${id}`}>データがありません。</TimerData>
              </div>
            );
          }
          const timestamp = parseInt(time);
          const timeLeft = timestamp - now;
          if (timeLeft > 0) {
            const days = Math.floor(timeLeft / 86400000);
            const hours = Math.floor((timeLeft % 86400000) / 3600000);
            const minutes = Math.floor((timeLeft % 3600000) / 60000);
            const seconds = Math.floor((timeLeft % 60000) / 1000);
            return (
              <div key={id}>
                <TimerTitle>潜水艦{id}</TimerTitle>
                <TimerData id={`timer${id}`}>
                  残り時間: {days}日 {hours}時間 {minutes}分 {seconds}秒
                  <br />
                  (帰還予定時刻:{" "}
                  {new Date(timestamp).toLocaleString("ja-JP", {
                    timeZone: "Asia/Tokyo",
                  })}
                  )
                </TimerData>
              </div>
            );
          } else {
            return (
              <div key={id}>
                <TimerTitle>潜水艦{id}</TimerTitle>
                <TimerData id={`timer${id}`}>探索完了！</TimerData>
              </div>
            );
          }
        })}
      </div>
      <Button
        // client:only は Astro 側のディレクティブなので、Astro ファイル側で設定してください
        onClick={() => {
          window.location.href = "/" + window.location.search;
        }}
        className="button"
      >
        時間を変更する
      </Button>
    </Container>
  );
};

export default TimerDisplay;
