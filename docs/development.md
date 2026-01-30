# 💻 開発ガイド

> **最終更新**: 2026年1月30日

FF14 サブマリンボイジャー残り時間表示ツールの開発環境セットアップと開発フローを説明します。

---

## 環境構築

### 必要なツール

| ツール  | バージョン  | インストール方法                             |
| :------ | :---------- | :------------------------------------------- |
| Node.js | 22.13.1以上 | [nodejs.org](https://nodejs.org/) または nvm |
| pnpm    | 最新版      | `npm install -g pnpm`                        |
| Git     | 最新版      | [git-scm.com](https://git-scm.com/)          |

### セットアップ手順

```bash
# 1. リポジトリをクローン
git clone https://github.com/kon-k/ff14-tool-voyager-timer.git
cd ff14-tool-voyager-timer

# 2. 依存パッケージをインストール
pnpm install

# 3. 開発サーバーを起動
pnpm run dev
```

---

## 開発コマンド

| コマンド           | 説明                                    |
| :----------------- | :-------------------------------------- |
| `pnpm run dev`     | 開発サーバーを起動（localhost:4321）    |
| `pnpm run build`   | 本番用ビルド（./dist/に出力）           |
| `pnpm run preview` | ビルド結果をプレビュー                  |
| `pnpm format`      | コードフォーマット（ESLint + Prettier） |

---

## 開発フロー

### 1. ブランチ作成

```bash
git checkout -b feature/your-feature-name
```

### 2. 開発

- 開発サーバーを起動: `pnpm run dev`
- ブラウザで http://localhost:4321 を開く
- ファイルを編集すると自動でリロード

### 3. コードフォーマット

```bash
pnpm format
```

### 4. ビルド確認

```bash
pnpm run build
pnpm run preview
```

### 5. コミット・プッシュ

```bash
git add .
git commit -m "feat: 機能の説明"
git push origin feature/your-feature-name
```

---

## コーディング規約

### ファイル構成

- コンポーネントは `src/components/` に配置
- 型定義は `src/types/` に配置
- ユーティリティ関数は `src/utils/` に配置
- ページは `src/pages/` に配置

### 命名規則

| 種類           | ルール           | 例                        |
| :------------- | :--------------- | :------------------------ |
| コンポーネント | PascalCase       | `TimerDisplay.tsx`        |
| 関数           | camelCase        | `millisecondsToTimeParts` |
| 定数           | UPPER_SNAKE_CASE | `MS_PER_DAY`              |
| 型             | PascalCase       | `TimerMethod`             |

### スタイリング

- Emotion（CSS-in-JS）を使用
- CSS変数でテーマを管理
- レスポンシブ対応必須

---

## デプロイ

mainブランチへのマージ時にVercelが自動デプロイを実行します。

### プレビューデプロイ

プルリクエストを作成すると、Vercelがプレビュー環境を自動生成します。PRのコメントにプレビューURLが表示されます。

### 本番デプロイ

mainブランチにマージされると、自動的に本番環境にデプロイされます。

- 本番URL: https://ff14-voyager-timer.vercel.app/

---

## トラブルシューティング

### 依存パッケージのエラー

```bash
# node_modulesを削除して再インストール
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### ポートが使用中

4321ポートが使用中の場合、別のポートで起動できます。

```bash
pnpm run dev -- --port 3000
```

### ビルドエラー

```bash
# キャッシュをクリア
rm -rf .astro dist
pnpm run build
```

---

## 関連リンク

- [Astro ドキュメント](https://docs.astro.build/)
- [React ドキュメント](https://react.dev/)
- [Emotion ドキュメント](https://emotion.sh/docs/introduction)
- [TypeScript ドキュメント](https://www.typescriptlang.org/docs/)

---

## 📋 更新履歴

| 日付       | 内容             |
| :--------- | :--------------- |
| 2026/01/30 | ドキュメント作成 |
