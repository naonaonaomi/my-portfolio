// トップページ（Home）のコンポーネント
import Profile from "../components/Profile";
import Qualifications from "../components/Qualifications";
import Experiences from "../components/Experiences";
import SelfPR from "../components/SelfPR";

const Home = () => (
    <div>
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
            <Profile />
            <Qualifications />
            <Experiences />
            <SelfPR />
            <footer className="text-center text-xs text-gray-400 mt-8">© 2024 松尾直実</footer>
        </div>
    </div>
);

export default Home; 