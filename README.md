# ポートフォリオ

このプロジェクトは、ReactとTypeScriptを用いて作成されたWebポートフォリオサイトです。

---

## 使用技術

- **言語**: TypeScript
- **フレームワーク／ライブラリ**:
  - React（フロントエンドUIライブラリ）
  - Vite（高速なビルドツール／開発サーバー）
  - Tailwind CSS（ユーティリティファーストなCSSフレームワーク）
  - React Router DOM（ルーティング）
- **その他**:
  - ESLint（静的解析ツール）
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
   ```
4. Lintチェック
   ```sh
   npm run lint
   ```
5. プレビュー
   ```sh
   npm run preview
   ```

## ディレクトリ構成（主なファイル）

- `src/`：ソースコード（`App.tsx`がメインコンポーネント、`main.tsx`がエントリーポイント）
- `public/`：公開用静的ファイル（例：`danceCat.jpg`、`assets/`配下のSVG等）
- `vite.config.ts`：Viteの設定ファイル
- `package.json`：依存パッケージやスクリプト管理
- `index.html`：HTMLエントリーポイント
- `eslint.config.js`：ESLint設定ファイル
- `tsconfig.json`：TypeScript設定ファイル

### src/ 以下の詳細

```
src/
  ├── components/
  │     ├── Header.tsx
  │     ├── Profile.tsx
  │     ├── Qualifications.tsx
  │     ├── Experiences.tsx
  │     └── SelfPR.tsx
  ├── pages/
  │     ├── Home.tsx
  │     └── About.tsx
  ├── App.tsx
  ├── main.tsx
  ├── index.css
  └── vite-env.d.ts
```

- `components/`：再利用可能なUIコンポーネント
- `pages/`：ページ単位のコンポーネント

### public/ 以下

```
public/
  ├── danceCat.jpg
  └── assets/
        ├── react.svg
        ├── vite.svg
        ├── tailwindcss.svg
        ├── typescript.svg
        ├── github.svg
        └── vercel.svg
```

---

## アイコンについて

本プロジェクトで使用している技術系アイコンは [TechIcons.dev](https://techicons.dev/) より引用し、`public/assets/`配下に配置しています。
