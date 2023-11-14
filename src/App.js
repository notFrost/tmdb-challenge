import React from "react";

import Home from "./pages/Home.tsx";
import MoviePage from "./pages/MoviePage.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style.css";
import SimilarCard from "./components/SimilarCard.js";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/similar" element={<SimilarCard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movie/:movieId" element={<MoviePage />} />
        </Routes>
      </Router>
    </div>
  );
}
