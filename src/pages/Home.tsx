import React, { useEffect, useState } from "react";
import cinemaImage from "../images/iconoir_cinema-old.svg";
import { Link } from "react-router-dom";

import {
  getPopularMoviesDB as getPopularMoviesDB,
  Movie,
} from "../services/tmdb.service.ts";

import Card from "../components/Card.js";
import Navbar from "../components/Navbar.js";

export default function Main() {
  const [popularMoviesDB, setPopularMoviesDB] = useState<Movie[]>([]);
  const [pageCount, setPageCount] = useState<number>(1);

  useEffect(() => {
    getPopularMoviesDB(pageCount).then((movies: Movie[]) => {
      setPopularMoviesDB((prevState) => [...prevState, ...movies]);
    });
  }, [pageCount]);
  console.log(popularMoviesDB);
  function handleViewMore() {
    setPageCount((prevState) => prevState + 1);
  }

  return (
    <div>
      <Navbar alt={false} />
      <header className=" d-flex header--container align-items-center">
        <h1 className=" header--title">Movie listings</h1>
        <p className="my-auto mx-3">Popular</p>
        <p className="my-auto mx-3">Premiere</p>
        <p className="my-auto mx-3">For release</p>
      </header>
      {popularMoviesDB ? (
        <div className="container-fluid movie--container">
          <div className="row gy-5 pt-1 pb-4">
            {popularMoviesDB.map((movie) => (
              <div
                key={movie.id}
                className="col-xl-3 col-lg-4 col-md-6 d-flex justify-content-around "
              >
                <Link
                  to={`/movie/${movie.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
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
      ) : (
        <h1>Loading...</h1>
      )}
      <div className="d-flex justify-content-center mb-5">
        <button
          onClick={handleViewMore}
          type="button"
          className="btn more--button"
        >
          <img src={cinemaImage}></img>
          View more
        </button>
      </div>
    </div>
  );
}
