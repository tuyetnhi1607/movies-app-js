import React from "react";
import { Link } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import Button from "../button/Button";
import "./cardmovie.scss";

function CardMovie(props) {
  const { data, category } = props;
  console.log("data",data);
  const src = apiConfig.w500Image(data.poster_path);
  const link = '/' + category + '/' + data.id;

  return (
    <Link to={link}>
      <div className="container">
        <img src={src} alt="" className="image" />
        <div className="middle">
          <i className="bx bxl-youtube bx-tada youtube"></i>
        </div>
      </div>
      <span className="title">{data.original_name || data.title}</span>
    </Link>
  );
}

export default CardMovie;