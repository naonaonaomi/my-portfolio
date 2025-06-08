import { FiExternalLink } from 'react-icons/fi';

// 作成サイト一覧セクションのコンポーネント

type Project = {
    year: string; // 作成年
    name: string; // プロジェクト名
    link: string; // 公開リンク
};

// 作成したプロジェクトのリスト
const projects: Project[] = [
    { year: "2025/6/8", name: "JavaScript練習サイト", link: "https://example.com/js-practice" },
    // { year: "2024/5", name: "React学習サイト", link: "https://example.com/react-learning" },
    // { year: "2024/4", name: "TypeScript入門", link: "https://example.com/ts-intro" },
];

const Projects = () => (
    <section className="bg-main-section rounded-2xl shadow-[0_2px_8px_var(--color-shadow)] p-7 border" style={{ backgroundColor: 'var(--color-main-section)', borderColor: 'var(--color-main-light-alpha)' }}>
        <h2 className="text-xl font-bold mb-4 border-b pb-2" style={{ color: 'var(--color-main)', borderColor: 'var(--color-main-light)' }}>作成したサイト</h2>
        <ul className="space-y-2">
        {projects.map((project, i) => (
            <li key={i} className="flex items-center gap-4">
                <span className="text-xs text-gray-400 w-20">{project.year}</span>
                <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base hover:underline flex items-center gap-1" 
                    style={{ color: 'var(--color-text)' }}
                >
                    {project.name}
                    <FiExternalLink className="w-4 h-4" />
                </a>
            </li>
        ))}
        </ul>
    </section>
);

export default Projects; 