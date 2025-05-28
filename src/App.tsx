import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
    return (
        <Router>
        <Header />
        <main className="pt-24">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            </Routes>
        </main>
        </Router>
    );
}

export default App; 