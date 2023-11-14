import React from "react";

export default function CastCard(props : any) {
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
            alt=""
          />
        </div>
        <div className="col-8 my-auto">
          <p
            style={{
              color: "#000",
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "24px",
              whiteSpace: "nowrap",
              letterSpacing: "0.08px",
              marginBottom: "0px",
            }}
          >
            {props.name}
          </p>
          <p
            style={{
              color: "#9CA4AB",
              fontFamily: "DM Sans",
              fontSize: "12px",
              fontStyle: "normal",
              whiteSpace: "nowrap",
              fontWeight: 500,
              lineHeight: "20px",
              letterSpacing: "0.06px",
              marginBottom: "0px",
            }}
          >
            {props.character}
          </p>
        </div>
      </div>
    </div>
  );
}
