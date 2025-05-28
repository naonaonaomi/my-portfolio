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
- `public/`：公開用静的ファイル
- `vite.config.ts`：Viteの設定ファイル
- `package.json`：依存パッケージやスクリプト管理

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
  │     └── react.svg
  ├── App.tsx
  ├── main.tsx
  ├── index.css
  └── vite-env.d.ts
```

- `components/`：再利用可能なUIコンポーネント
- `pages/`：ページ単位のコンポーネント
- `assets/`：画像やSVGなどの静的リソース

## ディレクトリ構成（リファクタリング後）

```
src/
  ├── components/         # UIコンポーネント
  ├── pages/              # ページ単位
  ├── constants/          # データ定数
  ├── types/              # 型定義
  ├── assets/             # 静的リソース
  ├── App.tsx
  ├── main.tsx
  └── index.css
```

## カスタマイズ方法
- `src/constants/`配下のデータを書き換えることで、資格や経験の内容を簡単に変更できます。
- デザインや色はTailwind CSSのクラス、または`tailwind.config.js`でカスタム可能です。

## リファクタリング方針
- 型定義・データ・UIロジックの分離
- 冗長なインラインstyleの排除
- propsによるデータ受け渡しで再利用性向上
- ESLint/型チェックの徹底
- アクセシビリティ・セキュリティ考慮
