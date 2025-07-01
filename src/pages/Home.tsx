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
        </div>
    </div>
);

export default Home; 