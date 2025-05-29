import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import StarBackground from "./components/StarBackground";

function App() {
    return (
        <Router>
            <Header />
            <main
                className="pt-24 min-h-screen bg-gradient-to-br from-[var(--color-bg-light)] via-[var(--color-bg-lighter)] to-white py-10 px-2"
                style={{ position: "relative" }}
            >
                <StarBackground />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App; 