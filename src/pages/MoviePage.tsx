import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Overlay from "../components/Overlay";
import Navbar from "../components/Navbar";
import CastCard from "../components/CastCard";

import "../styles/MoviePage.css";

import {
  getMovieById,
  getCastByMovieId,
  Movie,
  Cast,
  getVideoByMovieId,
  getSimliarById,
} from "../services/tmdb.service";
import SimilarCard from "../components/SimilarCard";
import { render } from "@testing-library/react";

export default function MoviePage(props: any) {
  const [currentMovie, setCurrentMovie] = useState<Movie>({} as Movie);
  const [similarMovies, setSimliarMovies] = useState<Movie[]>([]);
  const [cast, setCast] = useState<Cast[]>([]);
  const [video, setVideo] = useState<String>("");
  const [activeMediaTab, setActiveMediaTab] = useState<string>("mostPopular");
  const { movieId } = useParams();

  useEffect(() => {
    getMovieById(Number(movieId)).then((movie: Movie) => {
      setCurrentMovie(movie);
    });

    getCastByMovieId(Number(movieId)).then((cast: Cast[]) => {
      setCast(cast);
    });
    getVideoByMovieId(Number(movieId)).then((url: String) => {
      setVideo(url);
    });
    getSimliarById(Number(movieId)).then((movies: Movie[]) => {
      setSimliarMovies(movies);
    });
    console.log(video);
  }, [movieId]);

  function handleChange(movieId: Number) {
    getMovieById(Number(movieId)).then((movie: Movie) => {
      setCurrentMovie(movie);
    });
  }

  return (
    <div>
      <Overlay movie={currentMovie} />
      <Navbar alt="alt" absolute={true} />
      <div className="mx-lg-5 px-lg-4 mx-4">
        <div className="my-5">
          <div className="mb-4">
            <h4>Story Line</h4>
            <p>{currentMovie.overview}</p>
          </div>
          <div className="my-5">
            <h4>Top Cast</h4>
            <div className="row gy-4">
              {cast
                .sort((a, b) => a.order - b.order)
                .slice(0, 6)
                .map((castMember) => (
                  <div
                    className="col-6 col-md-4 col-xxl d-flex justify-content-around"
                    key={castMember.id}
                  >
                    <CastCard
                      url={castMember.photo}
                      name={castMember.name}
                      character={castMember.character}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div>
          <h4>Media</h4>
          <div className=" d-flex media-container align-items-center ms-0 ps-0 mt-4 mb-5">
            <ul className="nav nav-underline">
              <li className="nav-item">
                <a
                  className={`nav-link  ${
                    activeMediaTab === "mostPopular" ? "active" : "opaque"
                  }`}
                  onClick={() => setActiveMediaTab("mostPopular")}
                >
                  Most Popular
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link  ${
                    activeMediaTab === "videos" ? "active" : "opaque"
                  }`}
                  onClick={() => setActiveMediaTab("videos")}
                >
                  Videos
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link  ${
                    activeMediaTab === "backdrops" ? "active" : "opaque"
                  }`}
                  onClick={() => setActiveMediaTab("backdrops")}
                >
                  Backdrops
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link  ${
                    activeMediaTab === "posters" ? "active" : "opaque"
                  }`}
                  onClick={() => setActiveMediaTab("posters")}
                >
                  Posters
                </a>
              </li>
            </ul>
          </div>

          <div className="ratio yt-ratio mb-5 pb-4">
            <iframe
              src={`https://www.youtube.com/embed/${video}`}
              className="object-fit-cover"
              title="YouTube video player"
            ></iframe>
          </div>
        </div>

        <div className="my-5">
          <h3 className="mb-4">Similar Movies for you</h3>
          <div className="row row-cols-auto justify-content-start align-items-center">
            {similarMovies.splice(0, 5).map((movie) => (
              <div className="col-auto mb-5 mx-auto">
                <Link
                  to={`/movie/${movie.id}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    cursor: "pointer",
                  }}
                  onClick={() => handleChange(movie.id)}
                >
                  {" "}
                  <SimilarCard
                    url={movie.backdrop}
                    title={movie.title}
                    rating={movie.rating}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
