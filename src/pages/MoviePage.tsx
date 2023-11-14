import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Overlay from "../components/Overlay.js";
import Navbar from "../components/Navbar.js";
import CastCard from "../components/CastCard.js";

import "../styles/MoviePage.css";

import {
  getMovieById,
  getCastByMovieId,
  Movie,
  Cast,
  getVideoByMovieId,
  getSimliarById,
} from "../services/tmdb.service.ts";
import SimilarCard from "../components/SimilarCard.js";

export default function MoviePage(props) {
  const [currentMovie, setCurrentMovie] = useState<Movie>({} as Movie);
  const [similarMovies, setSimliarMovies] = useState<Movie[]>([]);
  const [cast, setCast] = useState<Cast[]>([]);
  const [video, setVideo] = useState<String>("");
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
  }, []);
  return (
    <div>
      <Overlay movie={currentMovie} />
      <Navbar alt="alt" />
      <div className="mx-5 px-4">
        <div className="my-5">
          <div className="mb-4">
            <h4>Story Line</h4>
            <p>{currentMovie.overview}</p>
          </div>
          <div>
            <h4>Top Cast</h4>
            <div className="row justify-content-around">
              {cast.splice(0, 6).map((cast) => (
                <div className="col-auto">
                  <CastCard
                    url={cast.photo}
                    name={cast.name}
                    character={cast.character}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h4>Media</h4>
          <div className=" d-flex media-container align-items-center ms-0 ps-0 mt-4 mb-5">
            <p className="ms-0 my-auto mx-3">Most Popular</p>
            <p className="my-auto mx-3">Videos</p>
            <p className="my-auto mx-3">Backdrops</p>
            <p className="my-auto mx-3">Posters</p>
          </div>

          <div className="ratio yt-ratio mb-5 pb-4">
            <iframe
              src={`https://www.youtube.com/embed/${video}`}
              className="object-fit-cover"
            ></iframe>
          </div>
        </div>

        <div className="my-5">
          <h3 className="mb-4">Similar Movies for you</h3>
          <div className="row justify-content-around">
            {similarMovies.splice(0, 5).map((movie) => (
              <div className="col-auto">
                <SimilarCard
                  url={movie.backdrop}
                  title={movie.title}
                  rating={movie.rating}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
