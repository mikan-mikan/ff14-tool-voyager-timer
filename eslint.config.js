import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
        alert: "readonly",
        navigator: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        URLSearchParams: "readonly",
      },
    },
    plugins: { "@typescript-eslint": tseslint },
    rules: {
      ...tseslint.configs.recommended.rules,
      curly: ["error", "all"],
      "arrow-parens": ["error", "always"], // () => {} のようなアロー関数で常に括弧を使用
      "no-lonely-if": "error",
      eqeqeq: ["error", "always"], // 厳密な等価演算子を使用
      "no-var": "error", // var の使用を禁止
      "no-unused-vars": "off", // TypeScript での未使用変数は @typescript-eslint/no-unused-vars で管理
      "@typescript-eslint/no-unused-vars": ["error"], // TypeScript の未使用変数をエラーにする
      "no-undef": "off", // TypeScript では未定義の変数は存在しないため、無効化
      "@typescript-eslint/no-explicit-any": "warn", // any 型の使用を警
    },
  },
  {
    ignores: ["dist/", "public/", "*.astro"],
  },
];
