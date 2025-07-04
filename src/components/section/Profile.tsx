import { getAge } from '../../utils';
import { SECTION_STYLES } from '../../constants/styles';

// プロフィールセクションのコンポーネント

const Profile = () => {
    const birthDate = new Date(1998, 0, 3); // 月は0始まり（1月=0）
    const age = getAge(birthDate);
    return (
        <section 
            className={`${SECTION_STYLES.base} rounded-3xl shadow-[0_4px_24px_var(--color-shadow)] p-10 flex flex-col items-center gap-4`} 
            style={SECTION_STYLES.background}
        >
            <div className="w-28 h-28 bg-gradient-to-tr rounded-full flex items-center justify-center shadow-lg mb-2 border-4 border-white overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--color-main) 0%, var(--color-main-light) 100%)' }}>
                <img src="/danceCat.jpg" alt="アイコン" className="w-full h-full object-cover" />
            </div>
            <div className="text-sm text-gray-400" style={{ letterSpacing: '0.1em' }}>まつお　なおみ</div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--color-main)' }}>松尾 直実</h1>
            <p className="text-gray-500 text-lg">1998.1.3（{age}歳）</p>
            <div className="flex flex-col md:flex-row gap-2 mt-2 text-sm items-center" style={{ color: 'var(--color-main)' }}>
                <a href="tel:08063794975" className="transition flex items-center gap-1 font-medium hover:underline" style={{ color: 'var(--color-main)' }}><span role="img" aria-label="phone">📞</span>080-6379-4975</a>
                <span className="hidden md:inline">|</span>
                <a href="mailto:naonaonaomi703@icloud.com" className="transition flex items-center gap-1 font-medium hover:underline" style={{ color: 'var(--color-main)' }}><span role="img" aria-label="mail">✉️</span>naonaonaomi703@icloud.com</a>
            </div>
        </section>
    );
};

export default Profile;  