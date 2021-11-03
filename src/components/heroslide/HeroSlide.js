import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import tmdbApi, { movieType, category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import Button from "../button/Button";
import './heroslide.scss';
import Modal from "../modal/Modal";

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
                        <SlideItem key={i} item={item} className={`${isActive ? 'active': ''}`}/>
                    )
                }
                
            </SwiperSlide>
          );
        })}
      </Swiper>
      {
        movieItems.map((item, i)=><TrailerModal key={i} item={item}/>)
      }
    </div>
  );
};

//Detail
const SlideItem = (props) => {
  
  const { item, key } = props;
  console.log("item",key, item);
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : ""
  );
  const activeModal = () => {
    const modal = document.querySelector(`#modal_${item.id}`);
    tmdbApi.getVideos(category.movie, item.id).then((response) => {
      if(response.results.length > 0) {
        const src = "https://www.youtube.com/embed/" + response.results[0].key;
        modal.querySelector("iframe").setAttribute("src", src);
      }
      else{
        modal.innerHTML = 'No trailer';
      }
      modal.classList.toggle('active');
    })
  }
  return (
    <div style={{ backgroundImage: `url(${background})`}} className={`hero-slide_item ${props.className}`}>
      <div className="hero-slide_item_content">
        {/* item info */}
        <div className="hero-slide_item_content_info">
          <span style={{fontSize:'2.5rem', fontWeight:'700'}}>{item.original_title}</span>
          <div style={{fontSize:'0.8rem', fontWeight:'500'}}>{item.overview}</div>
          <div className="button">
            <Button>Watch Now</Button>
            <Button className="btn-outline" onClick={activeModal}>Watch trailer</Button>
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

const TrailerModal = (props) =>{
  const {item} = props;
  return (
    <Modal active={false} id={`modal_${item.id}`}/>
  )
}

export default HeroSlide;
