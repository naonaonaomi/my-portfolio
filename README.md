# ポートフォリオ

このプロジェクトは、ReactとTypeScriptを用いて作成されたWebポートフォリオサイトです。

---

## 使用技術

- **言語**: TypeScript
- **フレームワーク／ライブラリ**:
  - React（フロントエンドUIライブラリ）
  - Vite（高速なビルドツール／開発サーバー）
  - Tailwind CSS（ユーティリティファーストなCSSフレームワーク）
- **その他**:
  - ESLint（コード品質チェック）
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

## ディレクトリ構成（主なファイル）

- `src/`：ソースコード（`App.tsx`がメインコンポーネント、`main.tsx`がエントリーポイント）
- `public/`：公開用静的ファイル（例：`danceCat.jpg`）
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
  ├── assets/
  │     ├── react.svg
  │     ├── vite.svg
  │     ├── tailwindcss.svg
  │     └── typescript.svg
  ├── App.tsx
  ├── main.tsx
  ├── index.css
  └── vite-env.d.ts
```

- `components/`：再利用可能なUIコンポーネント
- `pages/`：ページ単位のコンポーネント
- `assets/`：画像やSVGなどの静的リソース

---

## アイコンについて

本プロジェクトで使用している技術系アイコンは [TechIcons.dev](https://techicons.dev/) より引用しています。

## カスタマイズ方法
- 資格や経験の内容は各コンポーネント（例：`Qualifications.tsx`や`Experiences.tsx`）内のデータを書き換えることで変更できます。
- デザインや色はTailwind CSSのクラス、または`tailwind.config.js`でカスタム可能です。

## リファクタリング方針
- 型定義・データ・UIロジックの分離
- 冗長なインラインstyleの排除
- propsによるデータ受け渡しで再利用性向上
- ESLint/型チェックの徹底
- アクセシビリティ・セキュリティ考慮
