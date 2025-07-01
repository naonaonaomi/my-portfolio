import { useState, useEffect } from 'react';

/**
 * ダークモード機能を管理するカスタムフック
 * ユーザーの設定を localStorage に保存し、ページ読み込み時に復元する
 */
export const useDarkMode = () => {
    // ダークモードの状態を管理（初期値は以下の優先順位で決定）
    const [darkMode, setDarkMode] = useState(() => {
        // ブラウザ環境でのみ実行
        if (typeof window !== 'undefined') {
            // 1. localStorage から保存済みの設定を取得
            const stored = localStorage.getItem('darkMode');
            if (stored !== null) {
                return stored === 'true';
            }
            // 2. ブラウザのダークモード設定を確認
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        // 3. サーバーサイドレンダリング時のデフォルト値
        return false;
    });

    // ダークモードの状態が変更された時の処理
    useEffect(() => {
        // ブラウザ環境でのみ実行
        if (typeof window !== 'undefined') {
            // localStorage に現在の設定を保存
            localStorage.setItem('darkMode', darkMode.toString());
        }
        
        // body要素のクラスを切り替えてスタイルを適用
        if (darkMode) {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }
    }, [darkMode]);

    // ダークモードの状態と設定関数を返す
    return { darkMode, setDarkMode };
};
