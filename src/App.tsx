import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import StarBackground from "./components/StarBackground";
import Footer from "./components/layout/Footer";

function App() {
    return (
        <Router>
            <Header />
            <main
                className="pt-24 min-h-screen bg-gradient-to-br from-[var(--color-bg-light)] via-[var(--color-bg-lighter)] to-[var(--color-main-bg-end)] py-10 px-2"
                style={{ position: "relative" }}
            >
                <StarBackground />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </main>
        </Router>
    );
}

export default App; 