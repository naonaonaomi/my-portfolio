// Aboutページのコンポーネント

import { useEffect, useState } from "react";
import { FiExternalLink } from 'react-icons/fi';

const About = () => {

    //
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        const checkDark = () => setIsDark(document.body.classList.contains("dark"));
        checkDark();
        const observer = new MutationObserver(checkDark);
        observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <div className="flex justify-center max-w-3xl mx-auto gap-10" style={{ position: "relative", zIndex: 2 }}>
                <div className="bg-white rounded-2xl shadow-[0_2px_8px_var(--color-shadow)] p-10 max-w-3xl w-full border" style={{ backgroundColor: 'var(--color-main-section)', borderColor: 'var(--color-main-light-alpha)'}}>
                    <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--color-main)' }}>
                            ソースコード
                        </h3>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <li>
                                <a
                                    href="https://github.com/naonaonaomi/my-portfolio"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between gap-2 bg-[var(--color-bg-box)] rounded-xl px-3 py-2 shadow-sm border border-[var(--color-main-light-alpha)] transition-transform duration-200 hover:scale-[1.03] hover:bg-[var(--color-bg-hover)] active:scale-100"
                                    style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                                >
                                    <span className="flex items-center gap-2">
                                        <img src={isDark ? "/assets/github_white.svg" : "/assets/github.svg"} alt="github" className="w-6 h-6" />
                                        <span className="font-bold text-[var(--color-black)]">GitHub</span>
                                    </span>
                                    <FiExternalLink className="w-4 h-4" style={{ color: 'var(--color-black)' }} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--color-main)' }}>
                            使用技術
                        </h3>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <li className="flex items-center gap-2 bg-[var(--color-bg-box)] rounded-xl px-3 py-2 shadow-sm border border-[var(--color-main-light-alpha)]">
                                <img src="/assets/react.svg" alt="React" className="w-6 h-6" />
                                <span className="font-bold text-[var(--color-react)]">React</span>
                            </li>
                            <li className="flex items-center gap-2 bg-[var(--color-bg-box)] rounded-xl px-3 py-2 shadow-sm border border-[var(--color-main-light-alpha)]">
                                <img src="/assets/typescript.svg" alt="TypeScript" className="w-6 h-6" />
                                <span className="font-bold text-[var(--color-ts)]">TypeScript</span>
                            </li>
                            <li className="flex items-center gap-2 bg-[var(--color-bg-box)] rounded-xl px-3 py-2 shadow-sm border border-[var(--color-main-light-alpha)]">
                                <img src="/assets/vite.svg" alt="Vite" className="w-6 h-6" />
                                <span className="font-bold text-[var(--color-vite)]">Vite</span>
                            </li>
                            <li className="flex items-center gap-2 bg-[var(--color-bg-box)] rounded-xl px-3 py-2 shadow-sm border border-[var(--color-main-light-alpha)]">
                                <img src="/assets/tailwindcss.svg" alt="Tailwind CSS" className="w-6 h-6" />
                                <span className="font-bold text-[var(--color-tailwind)]">Tailwind CSS</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--color-main)' }}>
                            公開方法
                        </h3>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <li className="flex items-center gap-2 bg-[var(--color-bg-box)] rounded-xl px-3 py-2 shadow-sm border border-[var(--color-main-light-alpha)]">
                                <img src={isDark ? "/assets/vercel _white.svg" : "/assets/vercel.svg"} alt="Vercel" className="w-6 h-6" />
                                <span className="font-bold text-[var(--color-black)]">Vercel</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <footer className="text-center text-xs text-gray-400 mt-8">© 2025 松尾直実</footer>
        </div>
    );
};

export default About; 