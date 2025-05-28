// プロフィールセクションのコンポーネント

// 年齢を計算する関数
const getAge = (birthDate: Date) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

const Profile = () => {
    const birthDate = new Date(1998, 0, 3); // 月は0始まり（1月=0）
    const age = getAge(birthDate);
    return (
        <section className="bg-white/90 rounded-3xl shadow-[0_4px_24px_rgba(255,179,71,0.18)] p-10 flex flex-col items-center gap-4 border" style={{ borderColor: '#FF990033' }}>
            <div className="w-28 h-28 bg-gradient-to-tr rounded-full flex items-center justify-center shadow-lg mb-2 border-4 border-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #FF9900 0%, #FFB347 100%)' }}>
                <img src="/danceCat.jpg" alt="アイコン" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-sm" style={{ color: '#FF9900' }}>松尾 直実</h1>
            <p className="text-gray-500 text-lg">1998.1.3（{age}歳）</p>
            <div className="flex flex-col md:flex-row gap-2 mt-2 text-sm items-center" style={{ color: '#FF9900' }}>
                <a href="tel:08063794975" className="transition flex items-center gap-1 font-medium hover:underline" style={{ color: '#FF9900' }}><span role="img" aria-label="phone">📞</span>080-6379-4975</a>
                <span className="hidden md:inline">|</span>
                <a href="mailto:naonaonaomi703@icloud.com" className="transition flex items-center gap-1 font-medium hover:underline" style={{ color: '#FF9900' }}><span role="img" aria-label="mail">✉️</span>naonaonaomi703@icloud.com</a>
            </div>
        </section>
    );
};

export default Profile; 