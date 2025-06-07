// 経験セクションのコンポーネント

type Experience = {
  name: string;   // 技術名
  period: string; // 経験期間
  detail: string; // 詳細
};

// React(Next.js)の期間を自動設定
const getReactPeriod = () => {
  const start = new Date(2025, 3);
  const now = new Date();
  let m = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  m = Math.max(m, 0);
  return m >= 12 ? `${Math.floor(m/12)}年${m%12 ? m%12 + 'か月' : ''}` : `${m}か月`;
};

const experiences: Experience[] = [
  { name: "VBA", period: "独学", detail: "基本的なマクロ作成が可能" },
  { name: "VB.NET", period: "9か月", detail: "基本的なプログラミングが可能" },
  { name: "PHP(CakePHP)", period: "1年2か月", detail: "基本的なプログラミングが可能" },
  { name: "React(Next.js)", period: getReactPeriod(), detail: "基本から学びなおし中" },
];

const Experiences = () => (
  <section className="rounded-2xl shadow-[0_2px_8px_var(--color-shadow)] p-7 border" style={{ backgroundColor: 'var(--color-main-section)', borderColor: 'var(--color-main-light-alpha)' }}>
    <h2 className="text-xl font-bold mb-4 border-b pb-2" style={{ color: 'var(--color-main)', borderColor: 'var(--color-main-light)' }}>経験</h2>
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