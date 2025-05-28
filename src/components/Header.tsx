import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="w-full bg-white/80 shadow-[0_2px_8px_rgba(255,153,0,0.10)] fixed top-0 left-0 z-50">
        <nav className="max-w-3xl mx-auto flex items-center justify-between px-4 py-3">
            <div className="text-xl font-bold" style={{ color: '#FF9900' }}>松尾直実ポートフォリオ</div>
            <ul className="flex gap-6 text-base font-medium">
            <li>
                <Link to="/" className="hover:underline" style={{ color: '#FF9900' }}>自己紹介</Link>
            </li>
            <li>
                <Link to="/about" className="hover:underline" style={{ color: '#FF9900' }}>このサイトについて</Link>
            </li>
            </ul>
        </nav>
        </header>
    );
}

export default Header; 