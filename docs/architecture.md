# 🏗️ アーキテクチャ

> **最終更新**: 2026年1月30日

FF14 サブマリンボイジャー残り時間表示ツールの技術構成とプロジェクト構造を説明します。

---

## 技術スタック

| 項目            | 技術                | 説明                                      |
| :-------------- | :------------------ | :---------------------------------------- |
| Framework       | Astro 5.15.9        | 静的サイト生成 + アイランドアーキテクチャ |
| UI Library      | React 19.0.0        | インタラクティブなコンポーネント          |
| Styling         | Emotion 11.14.0     | CSS-in-JS                                 |
| Language        | TypeScript          | 型安全な開発                              |
| Runtime         | Node.js 22.13.1     | 開発・ビルド環境                          |
| Package Manager | pnpm                | 高速なパッケージ管理                      |
| Deploy          | Vercel              | ホスティング・CI/CD                       |
| Font            | Zen Kaku Gothic New | 日本語フォント                            |

---

## ディレクトリ構造

```
ff14-tool-voyager-timer/
├── public/              # 静的アセット
├── src/
│   ├── assets/          # 画像等のアセット
│   ├── components/      # Reactコンポーネント
│   │   ├── Button.tsx
│   │   ├── ButtonWrap.tsx
│   │   ├── CalendarInput.tsx
│   │   ├── CardTitle.tsx
│   │   ├── FormField.tsx
│   │   ├── Link.tsx
│   │   ├── NumberField.tsx
│   │   ├── PageHeader.tsx
│   │   ├── PageSubTitle.tsx
│   │   ├── PageTitle.tsx
│   │   ├── PrivacyPolicy.tsx
│   │   ├── PrivacyPolicyLink.tsx
│   │   ├── RemainingTimeInput.tsx
│   │   ├── TimerDisplay.tsx
│   │   ├── TimerForm.tsx
│   │   ├── TimerSettings.tsx
│   │   └── ToggleTheme.tsx
│   ├── layouts/         # Astroレイアウト
│   │   ├── BaseLayout.astro
│   │   ├── Footer.astro
│   │   └── Header.astro
│   ├── pages/           # ページコンポーネント
│   │   ├── index.astro
│   │   ├── privacy.astro
│   │   └── timer.astro
│   ├── types/           # TypeScript型定義
│   │   ├── ButtonProps.ts
│   │   ├── Common.ts
│   │   ├── LinkProps.ts
│   │   └── TimerTypes.ts
│   └── utils/           # ユーティリティ関数
│       └── time.ts
├── docs/                # ドキュメント
├── astro.config.mjs     # Astro設定
├── tsconfig.json        # TypeScript設定
├── eslint.config.js     # ESLint設定
└── package.json         # プロジェクト設定
```

---

## アーキテクチャ概要

### Astro + React アイランドアーキテクチャ

このプロジェクトでは、Astroのアイランドアーキテクチャを採用しています。

- **Astro**: ページの静的な部分をレンダリング（レイアウト、ヘッダー、フッター）
- **React**: インタラクティブな部分のみをハイドレート（タイマー、フォーム）

これにより、初期ロードが高速で、必要な部分のみJavaScriptが実行されます。

### ページ構成

| ページ               | パス       | 説明                 |
| :------------------- | :--------- | :------------------- |
| ホーム               | `/`        | タイマー設定フォーム |
| タイマー             | `/timer`   | カウントダウン表示   |
| プライバシーポリシー | `/privacy` | プライバシーポリシー |

### データフロー

1. ユーザーがフォームで帰還時刻を入力
2. 入力データがURLパラメータにエンコード
3. タイマーページでURLパラメータをデコード
4. 1秒ごとに残り時間を計算・表示

---

## 次のステップ

- [コンポーネント](./components.md) - UIコンポーネントの詳細
- [ユーティリティ](./utilities.md) - ヘルパー関数の詳細

---

## 📋 更新履歴

| 日付       | 内容             |
| :--------- | :--------------- |
| 2026/01/30 | ドキュメント作成 |
