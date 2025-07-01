import type { Experience } from '../../types';
import { getReactPeriod } from '../../utils';
import { SECTION_STYLES } from '../../constants/styles';

// 経験セクションのコンポーネント

const experiences: Experience[] = [
  { name: "VBA", period: "独学", detail: "基本的なマクロ作成が可能" },
  { name: "VB.NET", period: "9か月", detail: "基本的なプログラミングが可能" },
  { name: "PHP(CakePHP)", period: "1年2か月", detail: "基本的なプログラミングが可能" },
  { name: "React(Next.js)", period: getReactPeriod(), detail: "基本から学びなおし中" },
];

const Experiences = () => (
  <section className={SECTION_STYLES.base} style={SECTION_STYLES.background}>
    <h2 className={SECTION_STYLES.header} style={SECTION_STYLES.headerStyle}>経験</h2>
    <ul className="space-y-3">
      {experiences.map((exp, i) => (
        <li key={i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6" style={{ color: 'var(--color-text)' }}>
          <span className="font-bold w-28" style={{ color: 'var(--color-main)' }}>{exp.name}</span>
          <span className="text-xs text-gray-400 w-20">{exp.period}</span>
          <span className="text-base">{exp.detail}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Experiences;    