// Aboutページのコンポーネント

const About = () => (
    <div className="max-w-3xl mx-auto flex flex-col gap-10">
        <div className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(255,153,0,0.12)] p-10 max-w-2xl w-full border" style={{ borderColor: '#FFB34755' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#FF9900' }}>このサイトについて</h2>
            <p className="text-gray-700 text-base leading-relaxed">
                このポートフォリオサイトは、松尾直実の自己紹介やスキル・経歴をまとめたものです。<br />
            </p>
            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: '#FF9900' }}>
                    使用技術
                </h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <li className="flex items-center gap-2 bg-[#FDF6ED] rounded-xl px-3 py-2 shadow-sm border border-[#FFB34755]">
                        <img src="/src/assets/react.svg" alt="React" className="w-6 h-6" />
                        <span className="font-bold text-[#00D8FF]">React</span>
                    </li>
                    <li className="flex items-center gap-2 bg-[#FDF6ED] rounded-xl px-3 py-2 shadow-sm border border-[#FFB34755]">
                        <img src="/src/assets/typescript.svg" alt="TypeScript" className="w-6 h-6" />
                        <span className="font-bold text-[#3178C6]">TypeScript</span>
                    </li>
                    <li className="flex items-center gap-2 bg-[#FDF6ED] rounded-xl px-3 py-2 shadow-sm border border-[#FFB34755]">
                        <img src="/src/assets/vite.svg" alt="Vite" className="w-6 h-6" />
                        <span className="font-bold text-[#646CFF]">Vite</span>
                    </li>
                    <li className="flex items-center gap-2 bg-[#FDF6ED] rounded-xl px-3 py-2 shadow-sm border border-[#FFB34755]">
                        <img src="/src/assets/tailwindcss.svg" alt="Tailwind CSS" className="w-6 h-6" />
                        <span className="font-bold text-[#38BDF8]">Tailwind CSS</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default About; 