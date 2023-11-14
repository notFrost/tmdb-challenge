import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  getPopularMoviesDB,
  getTopRatedMovies,
  getUpcomingMovies,
  Movie,
} from "../services/tmdb.service";

import Card from "../components/Card";
import Navbar from "../components/Navbar";

export default function Main() {
  const [popularMoviesDB, setPopularMoviesDB] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [pageCount, setPageCount] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<string>("popular");

  useEffect(() => {
    if (activeTab === "popular") {
      getPopularMoviesDB(pageCount).then((movies: Movie[]) => {
        setPopularMoviesDB((prevState) => [...prevState, ...movies]);
      });
    } else if (activeTab === "premiere") {
      getUpcomingMovies(pageCount).then((movies: Movie[]) => {
        setUpcomingMovies((prevState) => [...prevState, ...movies]);
      });
    } else if (activeTab === "release") {
      getTopRatedMovies(pageCount).then((movies: Movie[]) => {
        setTopRatedMovies((prevState) => [...prevState, ...movies]);
      });
    }
  }, [pageCount, activeTab]);

  function handleTabChange(newTab: string) {
    setPopularMoviesDB([]);
    setUpcomingMovies([]);
    setTopRatedMovies([]);
    setActiveTab(newTab);
    setPageCount(1); // Reset page count
  }

  function handleViewMore() {
    setPageCount((prevState) => prevState + 1);
  }

  return (
    <div>
      <div className="global-container">
        <Navbar alt={false} />
        <header className="d-flex header--container align-items-center">
          <h1 className="header--title">Movie listings</h1>
          <ul className="nav nav-underline">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "popular" ? "active" : ""
                }`}
                onClick={() => handleTabChange("popular")}
              >
                Popular
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "premiere" ? "active" : ""
                }`}
                onClick={() => handleTabChange("premiere")}
              >
                Premiere
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "release" ? "active" : ""
                }`}
                onClick={() => handleTabChange("release")}
              >
                For release
              </a>
            </li>
          </ul>
        </header>
        <div className="tab-content">
          <div
            className={`tab-pane fade ${
              activeTab === "popular" ? "show active" : ""
            }`}
          >
            {popularMoviesDB ? (
              <MoviesList movies={popularMoviesDB} />
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "premiere" ? "show active" : ""
            }`}
          >
            {/* Content for Premiere movies */}
            {upcomingMovies ? (
              <MoviesList movies={upcomingMovies} />
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "release" ? "show active" : ""
            } `}
          >
            {/* Content for For Release movies */}
            {topRatedMovies ? (
              <MoviesList movies={topRatedMovies} />
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-center mb-5">
          <button
            onClick={handleViewMore}
            type="button"
            className="btn more--button"
          >
            <img src="/public/images/iconoir_cinema-old.svg" alt=""></img>
            View more
          </button>
        </div>
      </div>
    </div>
  );
}

function MoviesList({ movies }: { movies: Movie[] }) {
  return (
    <div className="container-fluid movie--container">
      <div className="row gy-5 pt-1 pb-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="col-xl-3 col-lg-4 col-md-6 d-flex justify-content-around"
          >
            <Link
              to={`/movie/${movie.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
              }}
            >
              <Card
                url={movie.poster}
                title={movie.title}
                rating={movie.rating}
                date={movie.date}
                language={movie.language}
                genres={movie.genres}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
