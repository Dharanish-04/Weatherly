import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forecast from "./Components/Forecast";
import Main from "./Components/Main";
import Favourites from "./Components/Favourites";
import About from "./Components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />} /> {/* Default Home */}
          <Route path="/Main" element={<Main />} /> {/* Optional alias */}
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

      {/* Footer */}
      <div className="w-full border border-blue-400 text-center py-4 bg-blue-200">
        <footer className="text-gray-700">
          This is my weather app @Created by Dharanish
        </footer>
      </div>
    </>
  );
}

export default App;
