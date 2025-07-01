import type { Qualification } from '../types';
import { SECTION_STYLES } from '../constants/styles';

// 保有資格セクションのコンポーネント

// 保有資格のリスト
const qualifications: Qualification[] = [
    { year: "2018/1", name: "普通自動車第一種免許" },
    { year: "2021/8", name: "普通自動二輪車免許" },
    { year: "2022/4", name: "基本情報技術者試験" },
    { year: "2023/6", name: "応用情報技術者試験" },
];

const Qualifications = () => (
    <section className={SECTION_STYLES.base} style={SECTION_STYLES.background}>
        <h2 className={SECTION_STYLES.header} style={SECTION_STYLES.headerStyle}>保有資格</h2>
        <ul className="space-y-2">
        {qualifications.map((q, i) => (
            <li key={i} className="flex items-center gap-4">
            <span className="text-xs text-gray-400 w-20">{q.year}</span>
            <span className="text-base" style={{ color: 'var(--color-text)' }}>{q.name}</span>
            </li>
        ))}
        </ul>
    </section>
);

export default Qualifications;    