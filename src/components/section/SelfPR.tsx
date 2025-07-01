import { SECTION_STYLES } from '../../constants/styles';

// 自己PRセクションのコンポーネント

const SelfPR = () => (
    <section className={SECTION_STYLES.base} style={SECTION_STYLES.background}>
        <h2 className={SECTION_STYLES.header} style={SECTION_STYLES.headerStyle}>自己PR</h2>
        <div className="flex flex-col gap-6">
            <div className="relative rounded-xl p-6 shadow-sm border-l-4" style={{ background: 'var(--color-bg-box-alpha)', borderColor: 'var(--color-main)' }}>
                <div className="font-bold mb-1" style={{ color: 'var(--color-main)' }}>分かりやすい資料作成</div>
                <div className="text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
                    誰が見ても理解しやすい資料作成が得意です。
                </div>
            </div>
            <div className="relative rounded-xl p-6 shadow-sm border-l-4" style={{ background: 'var(--color-bg-box-alpha)', borderColor: 'var(--color-main)' }}>
                <div className="font-bold mb-1" style={{ color: 'var(--color-main)' }}>UIの改善</div>
                <div className="text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
                    社内システムのUIを改善しました。
                </div>
            </div>
        </div>
    </section>
);

export default SelfPR;  