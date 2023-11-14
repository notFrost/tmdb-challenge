import React from "react";

import playIcon from "../images/play-icon.svg";
import bookmarkIcon from "../images/bookmark-icon.svg";
import likeIcon from "../images/thumb_up-icon.svg";
import downloadIcon from "../images/download-icon.svg";
import shareIcon from "../images/share-icon.svg";

import "../styles/Overlay.css";

export default function Overlay(props: any) {
  console.log(props);
  return (
    <div
      className="overlay-container d-flex flex-column justify-content-end"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${props.movie.backdrop}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="overlay"></div>
      <div className="overlay-info row justify-content-between ">
        <div className="overlay-details col-lg-5">
          <button className="season-info btn">
            <p className="my-auto">Movie</p>
          </button>
          <div className="overlay-text">
            <h1>{props.movie.title}</h1>
            <p>
              {props.movie.runtime} Minutes •{" "}
              {props.movie.date && props.movie.date.slice(0, 4)} •{" "}
              {props.movie.genres &&
                props.movie.genres.map((genre: any) => genre.name).join(" • ")}
            </p>
          </div>
          <div className="row gap-5">
            <button className="col-5 overlay-button1 btn justify-content-center align-items-center mx-auto">
              <img src={playIcon}></img>
              Continue Watching
            </button>
            <button className="col-5 overlay-button2 btn justify-content-center align-items-center mx-auto">
              <img src={bookmarkIcon}></img>
              Add Watchlist
            </button>
          </div>
        </div>
        <div className="movie-cta col-lg-5 row mt-auto gap-4 d-none d-lg-flex">
          <button className="btn btn-cta col justify-content-center">
            <img src={downloadIcon}></img>
            Download
          </button>
          <button className="btn btn-cta col justify-content-center">
            <img src={shareIcon}></img>Share
          </button>
          <button className="btn btn-cta col justify-content-center">
            <img src={likeIcon}></img>Like
          </button>
        </div>
      </div>
    </div>
  );
}
