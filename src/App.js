import React from "react";

import Home from "./pages/Home.tsx";
import MoviePage from "./pages/MoviePage.tsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./style.css";
import SimilarCard from "./components/SimilarCard.js";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/movie/:movieId" element={<MoviePage />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
}
