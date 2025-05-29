// 保有資格セクションのコンポーネント

type Qualification = {
    year: string; // 取得年
    name: string; // 資格名
};

// 保有資格のリスト
const qualifications: Qualification[] = [
    { year: "2018/1", name: "普通自動車第一種免許" },
    { year: "2021/8", name: "普通自動二輪車免許" },
    { year: "2022/4", name: "基本情報技術者試験" },
    { year: "2023/6", name: "応用情報技術者試験" },
];

const Qualifications = () => (
    <section className="bg-main-section  rounded-2xl shadow-[0_2px_8px_var(--color-shadow)] p-7 border" style={{ backgroundColor: 'var(--color-main-section)', borderColor: 'var(--color-main-light-alpha)' }}>
        <h2 className="text-xl font-bold mb-4 border-b pb-2" style={{ color: 'var(--color-main)', borderColor: 'var(--color-main-light)' }}>保有資格</h2>
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