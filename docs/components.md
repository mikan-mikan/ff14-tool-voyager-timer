# 🧩 コンポーネント

> **最終更新**: 2026年1月30日

FF14 サブマリンボイジャー残り時間表示ツールで使用されているReactコンポーネントを説明します。

---

## コンポーネント一覧

### フォーム関連

| コンポーネント       | 説明                                                      |
| :------------------- | :-------------------------------------------------------- |
| `TimerSettings`      | タイマー設定のメインコンポーネント。4隻分のフォームを管理 |
| `TimerForm`          | 1隻分のタイマー設定フォーム                               |
| `RemainingTimeInput` | 残り時間入力フォーム（日・時間・分）                      |
| `CalendarInput`      | 帰還予定時刻入力（カレンダーピッカー）                    |
| `FormField`          | フォームフィールドのラッパーコンポーネント                |
| `NumberField`        | 数値入力フィールド                                        |

### 表示関連

| コンポーネント | 説明                                     |
| :------------- | :--------------------------------------- |
| `TimerDisplay` | カウントダウン表示のメインコンポーネント |
| `PageHeader`   | ページヘッダー                           |
| `PageTitle`    | ページタイトル                           |
| `PageSubTitle` | ページサブタイトル                       |
| `CardTitle`    | カードタイトル（潜水艦番号表示など）     |

### UI部品

| コンポーネント | 説明                       |
| :------------- | :------------------------- |
| `Button`       | 汎用ボタンコンポーネント   |
| `ButtonWrap`   | ボタンのラッパー（配置用） |
| `Link`         | リンクコンポーネント       |
| `ToggleTheme`  | ダークモード切り替えボタン |

### その他

| コンポーネント      | 説明                           |
| :------------------ | :----------------------------- |
| `PrivacyPolicy`     | プライバシーポリシー本文       |
| `PrivacyPolicyLink` | プライバシーポリシーへのリンク |

---

## 主要コンポーネントの詳細

### TimerSettings

タイマー設定画面のルートコンポーネントです。4隻分の潜水艦タイマーを管理します。

```tsx
// 使用例
<TimerSettings client:load />
```

#### 機能

- 4隻分のタイマー状態を管理
- 入力方式（残り時間/帰還予定時刻）の切り替え
- URLパラメータへのエンコード/デコード

### TimerDisplay

カウントダウンを表示するコンポーネントです。URLパラメータから帰還時刻を取得し、リアルタイムで残り時間を表示します。

```tsx
// 使用例
<TimerDisplay client:load />
```

#### 機能

- 1秒ごとのカウントダウン更新
- 帰還済み判定
- URLコピー機能

### RemainingTimeInput

残り時間を入力するためのフォームコンポーネントです。

#### Props

```typescript
interface RemainingTimeInputProps {
  id: number;
  days: number | string;
  hours: number | string;
  minutes: number | string;
  onUpdate: (field: keyof Timer, value: string) => void;
}
```

### CalendarInput

帰還予定時刻をカレンダーから選択するためのコンポーネントです。

#### Props

```typescript
interface CalendarInputProps {
  id: number;
  absoluteTime: string;
  onUpdate: (field: keyof Timer, value: string) => void;
}
```

---

## スタイリング

各コンポーネントはEmotionを使用してスタイリングされています。

```typescript
import styled from "@emotion/styled";

const StyledButton = styled.button`
  background-color: var(--primary);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
`;
```

---

## 次のステップ

- [ユーティリティ](./utilities.md) - ヘルパー関数の詳細
- [開発ガイド](./development.md) - 開発に参加する

---

## 📋 更新履歴

| 日付       | 内容             |
| :--------- | :--------------- |
| 2026/01/30 | ドキュメント作成 |
