import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Students } from "./pages/Students";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Society } from "./pages/Society";
import { Apply } from "./pages/Apply";
import "./css/index.css";
import { Blog } from "./pages/Blog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/students" element={<Students />} /> */}
        <Route path="/apply" element={<Apply />} />
        <Route path="/society" element={<Society />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
