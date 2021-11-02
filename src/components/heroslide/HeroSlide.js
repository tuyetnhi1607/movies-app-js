import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import tmdbApi, { movieType } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import Button from "../button/Button";
import './heroslide.scss';

const HeroSlide = () => {
  //Goi API
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const params = { page: 1 };
      try {
        const res = await tmdbApi.getMoviesList(movieType.popular, { params });
        setMovieItems(res.results.slice(0, 6));
      } catch {
        console.log("eeeeerr");
      }
    };
    getMovie();
  }, []);
  return (
    //Slide
    <div >
      <Swiper>
        {movieItems.map((item, i) => {
          return (
            <SwiperSlide key={i}>
                {
                    ({isActive})=>(
                        <SlideItem item={item} className={`${isActive ? 'active': ''}`}/>
                    )
                }
                
            </SwiperSlide>
          );
        })}
      </Swiper>
      
    </div>
  );
};

//Detail
const SlideItem = (props) => {
  console.log("item");
  const { item } = props;
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : ""
  );
  return (
    <div style={{ backgroundImage: `url(${background})`}} className={`hero-slide_item ${props.className}`}>
      <div className="hero-slide_item_content">
        {/* item info */}
        <div className="hero-slide_item_content_info">
          <span style={{fontSize:'2.5rem', fontWeight:'700'}}>{item.original_title}</span>
          <div style={{fontSize:'0.8rem', fontWeight:'500'}}>{item.overview}</div>
          <div className="button">
            <Button>Watch Now</Button>
            <Button className="btn-outline">Watch trailer</Button>
          </div>
          
        </div>
        {/* poster */}
        <div className="hero-slide_item_content_poster">
            <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
