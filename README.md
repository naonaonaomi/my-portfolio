# ポートフォリオ

このプロジェクトは、ReactとTypeScriptを用いて作成されたWebポートフォリオサイトです。

---

## 使用技術

- **言語**: TypeScript
- **フレームワーク／ライブラリ**:
  - React（フロントエンドUIライブラリ）v19.1.0
  - React DOM v19.1.0
  - React Router DOM（ルーティング）v7.6.1
  - Vite（高速なビルドツール／開発サーバー）v6.3.5
  - Tailwind CSS（ユーティリティファーストなCSSフレームワーク）v4.1.7
  - @tailwindcss/vite（Tailwind CSS用Viteプラグイン）v4.1.7
- **その他**:
  - ESLint（静的解析ツール）v9.25.0
  - 各種型定義パッケージ（@types/react など）

## 開発手順

1. 依存パッケージのインストール
   ```sh
   npm install
   ```
2. 開発サーバー起動
   ```sh
   npm run dev
   ```
3. ビルド
   ```sh
   npm run build
   # ※ TypeScriptのビルド(tsc -b)も含まれます
   ```
4. Lintチェック
   ```sh
   npm run lint
   ```
5. プレビュー
   ```sh
   npm run preview
   ```

## ディレクトリ構成（主なファイル・フォルダ）

```
project-root/
  ├── src/
  │     ├── components/
  │     │     ├── Header.tsx
  │     │     ├── Profile.tsx
  │     │     ├── Qualifications.tsx
  │     │     ├── Experiences.tsx
  │     │     ├── SelfPR.tsx
  │     │     └── StarBackground.tsx
  │     ├── pages/
  │     │     ├── Home.tsx
  │     │     └── About.tsx
  │     ├── App.tsx
  │     ├── main.tsx
  │     ├── index.css
  │     └── vite-env.d.ts
  ├── public
  │   └── ...
  ├── vite.config.ts
  ├── package.json
  ├── index.html
  ├── eslint.config.js
  └── tsconfig.json
```

- `src/`：ソースコード（`App.tsx`がメインコンポーネント、`main.tsx`がエントリーポイント）
  - `components/`：再利用可能なUIコンポーネント
  - `pages/`：ページ単位のコンポーネント
- `public/`：公開用静的ファイル（画像やSVGアイコンなど）
- その他設定ファイル：Vite、ESLint、TypeScriptなどの設定

---

## アイコンについて

本プロジェクトで使用している技術系アイコンは [TechIcons.dev](https://techicons.dev/) より引用し、`public/assets/`配下に配置しています。
