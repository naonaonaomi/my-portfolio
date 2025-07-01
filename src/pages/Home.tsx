// トップページ（Home）のコンポーネント
import Profile from "../components/Profile";
import Projects from "../components/Projects";
// import Qualifications from "../components/Qualifications";
// import Experiences from "../components/Experiences";
// import SelfPR from "../components/SelfPR";

const Home = () => (
    <div style={{ position: "relative", zIndex: 2 }}>
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
            <Profile />
            <Projects />
            {/* <Qualifications />
            <Experiences />
            <SelfPR /> */}
            <footer className="text-center text-xs text-gray-400 mt-8">© 2025 松尾直実</footer>
        </div>
    </div>
);

export default Home; 