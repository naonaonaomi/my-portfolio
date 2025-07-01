import { FiExternalLink } from 'react-icons/fi';
import type { Project } from '../types';
import { SECTION_STYLES } from '../constants/styles';

// 作成サイト一覧セクションのコンポーネント

// 作成したプロジェクトのリスト
const projects: Project[] = [
    { year: "2025/6/8", name: "JavaScript練習サイト", link: "https://20250608-js-practice.vercel.app/" },
    { year: "2025/6/14", name: "TypeScript練習サイト", link: "https://20250614-ts-practice.vercel.app/" },
];

const Projects = () => (
    <section className={SECTION_STYLES.base} style={SECTION_STYLES.background}>
        <h2 className={SECTION_STYLES.header} style={SECTION_STYLES.headerStyle}>作成したサイト</h2>
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