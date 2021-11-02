import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import tmdbApi, { movieType } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
const HeroSlide = () => {
  //Goi API
  const [listMovie, setListMovie] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const params = { page: 1 };
      try {
        const res = await tmdbApi.getMoviesList(movieType.popular, { params });
        setListMovie(res.results.slice(0, 6));
      } catch {
        console.log("eeeeerr");
      }
    };
    getMovie();
  }, []);
  return (
    //Slide
    <div>
      <Swiper>
        {listMovie.map((item, i) => {
          return (
            <SwiperSlide key={i}>
                <SlideItem item={item} />
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
  return <img src={background} alt="" />;
}

export default HeroSlide;
