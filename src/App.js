import "./App.css";
import { useEffect } from "react";
import Header from "./Layout/Header";
import Home from "./Home/Home";
import Aboutus from "./Aboutus/Aboutus";
import Footer from "./Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact/Contact";
import Sectors from "./Sectors/Sectors";
function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
