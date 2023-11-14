import React from "react";

import starIcon from "../images/star-icon.svg";

export default function SimilarCard(props) {
  return (
    <div style={{ width: "280px" }}>
      <div
        style={{
          height: "183px",
          width: "280px",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={`https://image.tmdb.org/t/p/w500${props.url}`}
        ></img>
      </div>
      <div>
        <p
          style={{
            color: "#000",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "0.08px",
          }}
          className="my-2 py-1"
        >
          {props.title}
        </p>
        <div
          className="row d-flex justify-content-start m-0 "
          style={{ width: "280px" }}
        >
          <img
            src={starIcon}
            style={{ width: "18px", height: "18px" }}
            className="px-0 me-1"
          ></img>

          <p
            style={{
              color: "#000",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "20px",
              letterSpacing: "0.06px",
            }}
            className="col-auto my-auto p-0 me-1"
          >
            {props.rating}
          </p>
          <p
            style={{
              color: "var(--grayscale-grayscale-70, #78828A)",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "20px",
              letterSpacing: "0.06px",
            }}
            className="col-auto my-auto p-0"
          >
            | {/*props.genres.map((genre) => genre.name).join(" • ")*/}Action •
            Movie
          </p>
        </div>
      </div>
    </div>
  );
}
