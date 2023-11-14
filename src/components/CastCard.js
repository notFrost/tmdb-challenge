import React from "react";

export default function CastCard(props) {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-4"
          style={{
            height: "48px",
            width: "48px",
            borderRadius: "50%",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <img
            style={{ width: "48px", height: "auto", objectFit: "cover" }}
            src={`https://image.tmdb.org/t/p/w500${props.url}`}
            alt="cast image"
          />
        </div>
        <div className="col-8 my-auto">
          <h4
            style={{
              color: "#000",
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "0.08px",
              marginBottom: "0px",
            }}
          >
            {props.name}
          </h4>
          <h6
            style={{
              color: "#9CA4AB",
              fontFamily: "DM Sans",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "20px",
              letterSpacing: "0.06px",
              marginBottom: "0px",
            }}
          >
            {props.character}
          </h6>
        </div>
      </div>
    </div>
  );
}
