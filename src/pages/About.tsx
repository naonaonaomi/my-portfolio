// Aboutページのコンポーネント

const About = () => (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5E1] via-[#FFD6A5] to-white py-10 px-2 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(255,153,0,0.12)] p-10 max-w-2xl w-full border" style={{ borderColor: '#FFB34755' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#FF9900' }}>このサイトについて</h2>
            <p className="text-gray-700 text-base leading-relaxed">
                このポートフォリオサイトは、松尾直実の自己紹介やスキル・経歴をまとめたものです。<br />
                デザインや実装はすべて自作し、ReactとTailwind CSSを用いて構築しています。
            </p>
        </div>
    </div>
);

export default About; 