import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="w-full bg-white/80 shadow-[0_2px_8px_rgba(255,153,0,0.10)] fixed top-0 left-0 z-50">
        <nav className="max-w-3xl mx-auto flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center">
                <img
                    src={'/danceCat.jpg'}
                    alt="松尾直実のポートフォリオ"
                    className="w-12 h-12 rounded-full shadow-lg border-4 border-orange-300 object-cover"
                />
            </Link>
            <ul className="flex gap-6 text-base font-medium">
            <li>
                <Link to="/about" className="hover:underline" style={{ color: '#FF9900' }}>このサイトについて</Link>
            </li>
            </ul>
        </nav>
        </header>
    );
}

export default Header; 