import Home from "./pages/Home.tsx";
import MoviePage from "./pages/MoviePage.tsx";
import MovieCard from "./components/MovieCard.tsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./style.css";
import ScrollToTop from "./services/scrollTopTop.js";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movie/:movieId" element={<MoviePage />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <ScrollToTop />
    </div>
  );
}
