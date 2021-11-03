import React from 'react'
import apiConfig from '../../api/apiConfig';
import Button from '../button/Button';
import './cardmovie.scss';


function CardMovie(props) {
  const { data } = props;
  const src = apiConfig.w500Image(data.poster_path);
  return (
    <div className="card">
      <div className="container">
        <img src={src} alt="" className="image" />
        <div className="middle">
          <i className="bx bxl-youtube bx-tada youtube"></i>
        </div>
      </div>
      <span className="title">{data.original_name || data.title}</span>
    </div>
  );
}

export default CardMovie;
