import React from "react";
import rottenTomatoesLogo from "../images/rotten_tomatoes-logo.png";
import imdbLogo from "../images/imdb-logo.png";

import "../styles/Card.css";

export default function Card(props) {
  return (
    <div className="card movie--card">
      <img
        src={`https://image.tmdb.org/t/p/w500${props.url}`}
        className="card-img-top card--poster mb-12"
        alt="..."
      />
      <p className="card-info mb-12">
        USA, {props.date && props.date.slice(0, 4)} - Current
      </p>
      <h5 className="card-title mb-12">{props.title}</h5>
      <div>
        <div className="row align-items-center mb-12 card-stats">
          <img src={imdbLogo} className="card-logos"></img>
          <p className="col mb-0">{(props.rating * 10).toFixed(1)}/100</p>
          <div className="w-auto"></div>
          <img src={rottenTomatoesLogo} className="card-logos"></img>
          <p className="col-2 mb-0">
            {(props.rating * 10 + (Math.random() * 10 - 5)).toFixed(0)}%
          </p>
        </div>
        <div className="card-genre mb-12">Action, Adventure, Horror</div>
      </div>
    </div>
  );
}
