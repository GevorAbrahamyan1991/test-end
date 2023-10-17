import { Routes, Route } from "react-router-dom";
import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import Home from "./pages/home";
import About from "./pages/about";
import News from "./pages/news";
import DrumKit from "./pages/components/drumKit";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/drum-kit" element={<DrumKit />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
