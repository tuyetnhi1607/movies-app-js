import React, {useEffect, useState, useRef} from 'react';
import {useParams} from 'react-router';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import './detail.scss'
import Button from '../../components/button/Button';
import CardMovie from '../../components/cardmovie/CardMovie';


function Detail() {
    const {category, id} = useParams();
    const [item, setItem] = useState('');
    const [cast, setCast] = useState([]);
    console.log("Hellll", category, id);
    useEffect(() => {
        const getMovie = async () => {
            const movie = await tmdbApi.detail(category, id, {params:{}})
            .then((response) => response)
            .catch((error) => {console.log("Error", error)})
            console.log("movie", movie)
            setItem(movie);
            const credits = await tmdbApi.credits(category, id)
            .then((response) => response)
            .catch((error) => {console.log("Error", error)})
            setCast(credits.cast.slice(0,5));
            
        }
        getMovie();
    }, [])
    const background = apiConfig.originalImage(item.backdrop_path);
    const poster = apiConfig.originalImage(item.poster_path);
    const genres = item.genres || [];
    console.log("cast", cast);
    return (
      <>
        <div
          style={{ backgroundImage: `url(${background})` }}
          className="detail"
        >
        </div>
        <div className="detail-content">
          <div className="detail-content-poster">
            <img src={poster} alt="" />
          </div>
          <div className="detail-content-info">
            <span className="detail-content-info-title">{item.title || item.original_name}</span>
            <div className="detail-content-info-genres">
              {genres.map((data, index) => (
                <Button className="btn-outline small">{data.name}</Button>
              ))}
            </div>
            <div className="detail-content-info-overview">{item.overview}</div>
            <div className="detail-content-info-cast">
              <h2>Cast</h2>
              <div className="list-container">
                {cast.map((cast, i) => {
                  const src = apiConfig.originalImage(cast.profile_path);
                  return (
                    <div className="card">
                      <div className="image">
                        <img src={src} alt="" />
                      </div>
                      <span className="name">{cast.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Detail
