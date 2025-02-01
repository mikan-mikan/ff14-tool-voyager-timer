import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import TimerForm from "./TimerForm.jsx";
import Button from "./Button.jsx";

function calculateTimestamp(method, days, hours, minutes, absoluteTime) {
  if (method === "absolute") {
    return absoluteTime ? new Date(absoluteTime).getTime() : null;
  }
  const totalMilliseconds =
    (parseInt(days) || 0) * 86400000 +
    (parseInt(hours) || 0) * 3600000 +
    (parseInt(minutes) || 0) * 60000;
  return totalMilliseconds > 0 ? Date.now() + totalMilliseconds : null;
}

const Container = styled.div`
  padding-bottom: 4rem;
`;

const Header = styled.h1`
  margin-bottom: 1rem;
`;

const Info = styled.p`
  margin-bottom: 1rem;
`;

const ButtonBox = styled.div`
  margin-top: 20px;
`;

const TimerSettings = () => {
  const [timers, setTimers] = useState([
    {
      id: 1,
      method: "relative",
      days: "",
      hours: "",
      minutes: "",
      absoluteTime: "",
    },
    {
      id: 2,
      method: "relative",
      days: "",
      hours: "",
      minutes: "",
      absoluteTime: "",
    },
    {
      id: 3,
      method: "relative",
      days: "",
      hours: "",
      minutes: "",
      absoluteTime: "",
    },
    {
      id: 4,
      method: "relative",
      days: "",
      hours: "",
      minutes: "",
      absoluteTime: "",
    },
  ]);

  // URL パラメータから初期値をセット
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const newTimers = timers.map((timer) => {
      const timeParam = urlParams.get(`time${timer.id}`);
      if (timeParam) {
        const timestamp = parseInt(timeParam);
        const now = Date.now();
        const timeLeft = timestamp - now;
        if (timeLeft > 0) {
          const days = Math.floor(timeLeft / 86400000);
          const hours = Math.floor((timeLeft % 86400000) / 3600000);
          const minutes = Math.floor((timeLeft % 3600000) / 60000);
          // 入力用にローカル日時（datetime-local 用）に変換
          const localDateTime = new Date(
            timestamp - new Date().getTimezoneOffset() * 60000
          )
            .toISOString()
            .slice(0, 16);
          return {
            ...timer,
            method: "relative",
            days,
            hours,
            minutes,
            absoluteTime: localDateTime,
          };
        }
      }
      return timer;
    });
    setTimers(newTimers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdateTimer = (id, field, value) => {
    setTimers((prev) =>
      prev.map((timer) =>
        timer.id === id ? { ...timer, [field]: value } : timer
      )
    );
  };

  const handleSubmit = () => {
    let params = [];
    let hasInput = false;
    timers.forEach((timer) => {
      const timestamp = calculateTimestamp(
        timer.method,
        timer.days,
        timer.hours,
        timer.minutes,
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
    <Container>
      <Header>FF14 サブマリンボイジャー設定画面</Header>
      <Info>
        4隻まで登録できます。「残り時間」か「帰還予定時刻」を選択・入力して、「設定完了」を押してください。
        <br />
        再設定の場合、時刻が過ぎている場合はリセットされています。
      </Info>
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
      <ButtonBox>
        <Button onClick={handleSubmit} className="button">
          設定完了
        </Button>
      </ButtonBox>
    </Container>
  );
};

export default TimerSettings;
