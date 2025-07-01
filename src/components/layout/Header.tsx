import { Link } from "react-router-dom";
import { useDarkMode } from '../../hooks/useDarkMode';

function Header() {
    const { darkMode, setDarkMode } = useDarkMode();

    return (
        <header className="w-full shadow-[0_2px_8px_var(--color-shadow-header)] fixed top-0 left-0 z-50" style={{ backgroundColor: 'var(--color-header-bg)' }}>
        <nav className="max-w-3xl mx-auto flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center">
                <img
                    src={'/danceCat.jpg'}
                    alt="松尾直実のポートフォリオ"
                    className="w-12 h-12 rounded-full shadow-lg border-4 border-[var(--color-main-light)] object-cover"
                />
            </Link>
            <div className="flex items-center gap-6">
                <Link to="/about" className="hover:underline text-base font-medium" style={{ color: 'var(--color-main)' }}>このサイトについて</Link>
                <button
                    onClick={() => setDarkMode((prev) => !prev)}
                    className="ml-4 p-2 rounded-full shadow-md border-2 border-[var(--color-main-light)] bg-gradient-to-tr from-[var(--color-bg-box)] to-[var(--color-bg-hover)] hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-0"
                    aria-label="ダークモード切替"
                >
                    {darkMode ? (
                        // 月アイコン
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-100" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                        </svg>
                    ) : (
                        // 太陽アイコン
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" />
                            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                        </svg>
                    )}
                </button>
            </div>
        </nav>
        </header>
    );
}

export default Header;  