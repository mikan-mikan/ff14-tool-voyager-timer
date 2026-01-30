# 🛠️ ユーティリティ

> **最終更新**: 2026年1月30日

FF14 サブマリンボイジャー残り時間表示ツールで使用されているユーティリティ関数を説明します。

---

## time.ts

時間計算に関するユーティリティ関数を提供します。

### 定数

```typescript
// ミリ秒単位の時間定数
export const MS_PER_DAY = 86400000; // 1日 = 86,400,000ms
export const MS_PER_HOUR = 3600000; // 1時間 = 3,600,000ms
export const MS_PER_MINUTE = 60000; // 1分 = 60,000ms
export const MS_PER_SECOND = 1000; // 1秒 = 1,000ms
```

### 型定義

```typescript
export interface TimeParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
```

### 関数

#### millisecondsToTimeParts

ミリ秒を日・時・分・秒に分解します。

```typescript
/**
 * ミリ秒を日・時・分・秒に分解
 * @param {number} ms - ミリ秒
 * @returns {TimeParts} - 日・時・分・秒のオブジェクト
 */
export function millisecondsToTimeParts(ms: number): TimeParts {
  const days = Math.floor(ms / MS_PER_DAY);
  const hours = Math.floor((ms % MS_PER_DAY) / MS_PER_HOUR);
  const minutes = Math.floor((ms % MS_PER_HOUR) / MS_PER_MINUTE);
  const seconds = Math.floor((ms % MS_PER_MINUTE) / MS_PER_SECOND);
  return { days, hours, minutes, seconds };
}
```

##### 使用例

```typescript
// 2日5時間30分15秒をミリ秒で表現
const ms = 2 * 86400000 + 5 * 3600000 + 30 * 60000 + 15 * 1000;

const parts = millisecondsToTimeParts(ms);
// { days: 2, hours: 5, minutes: 30, seconds: 15 }
```

#### formatDateTimeLocal

Dateオブジェクトをdatetime-local用の文字列に変換します。

```typescript
/**
 * Dateオブジェクトをdatetime-local用の文字列に変換
 * @param {Date} date - 変換するDate
 * @returns {string} - YYYY-MM-DDTHH:MM形式の文字列
 */
export function formatDateTimeLocal(date: Date): string {
  const offset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - offset * MS_PER_MINUTE);
  return local.toISOString().slice(0, 16);
}
```

##### 使用例

```typescript
const date = new Date("2026-01-30T15:30:00");
const formatted = formatDateTimeLocal(date);
// "2026-01-30T15:30"
```

---

## 型定義ファイル

### TimerTypes.ts

タイマー関連の型定義を提供します。

```typescript
// 入力方式の型
export type TimerMethod = "relative" | "absolute";

// タイマーの状態
export interface Timer {
  id: number;
  method: TimerMethod;
  days: number | string;
  hours: number | string;
  minutes: number | string;
  absoluteTime: string;
}

// タイマーフォームのProps
export interface TimerFormProps {
  timer: Timer;
  onUpdate: (field: keyof Timer, value: string) => void;
}

// 残り時間入力のProps
export interface RemainingTimeInputProps {
  id: number;
  days: number | string;
  hours: number | string;
  minutes: number | string;
  onUpdate: (field: keyof Timer, value: string) => void;
}

// カレンダー入力のProps
export interface CalendarInputProps {
  id: number;
  absoluteTime: string;
  onUpdate: (field: keyof Timer, value: string) => void;
}
```

### ButtonProps.ts

ボタンコンポーネントの型定義を提供します。

### LinkProps.ts

リンクコンポーネントの型定義を提供します。

### Common.ts

共通の型定義を提供します。

---

## 次のステップ

- [コンポーネント](./components.md) - コンポーネントの詳細
- [開発ガイド](./development.md) - 開発に参加する

---

## 📋 更新履歴

| 日付       | 内容             |
| :--------- | :--------------- |
| 2026/01/30 | ドキュメント作成 |
