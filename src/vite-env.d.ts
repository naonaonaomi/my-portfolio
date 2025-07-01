/**
 * Vite環境用TypeScript型定義ファイル
 * 
 * このファイルの役割：
 * 1. Vite固有のAPIや機能に対するTypeScript型定義を提供
 * 2. import.meta.env などの環境変数アクセスを型安全にする
 * 3. 静的アセット（画像、CSS、JSONなど）のインポートに型定義を提供
 * 4. Hot Module Replacement (HMR) APIの型定義を提供
 * 
 * 具体的に有効になる機能：
 * - import.meta.env.VITE_* 環境変数への型安全なアクセス
 * - .svg, .png, .jpg などの画像ファイルのインポート
 * - .json ファイルのインポート
 * - import.meta.hot HMR API の使用
 * - import.meta.url などのVite固有のメタ情報へのアクセス
 * 
 * 注意：このファイルは通常、手動で編集する必要はありません
 */

/// <reference types="vite/client" />
