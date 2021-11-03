import React from 'react'
import apiConfig from '../../api/apiConfig';
import './cardmovie.scss';


function CardMovie(props) {
    const {data} = props;
    const src = apiConfig.w500Image(data.poster_path);
    return (
        <div className="card">
            <img src={src} alt="" />
            <h5>{data.original_name||data.title}</h5>
        </div>

    )
}

export default CardMovie
