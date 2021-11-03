import React, { useEffect, useRef, useState } from "react";
import tmdbApi, { category } from "../../api/tmdbApi";
import Button from "../../components/button/Button";
import CardMovie from "../../components/cardmovie/CardMovie";
import "./movielist.scss";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

function MovieList(props) {
  const { category, type, title } = props;
  console.log("category", category, type);
  const [list, setList] = useState([]);
  useEffect(() => {
    const getMovieList = async () => {
      const params = { page: 1 };
      try {
        if (category === "movie") {
          const data = await tmdbApi.getMoviesList(type, { params });
          setList(data.results);
          console.log("movie List", list);
        } else {
          const data = await tmdbApi.getTvList(type, { params });
          setList(data.results);
          console.log("movie List", list);
        }
      } catch {
        console.log("err");
      }
    };
    getMovieList();
  }, []);

  return (
    <div className="section">
      {/* header */}
      <div className="section-header">
        <h2>{title}</h2>
        <Button className="btn-outline small">View more</Button>
      </div>
      {/* content */}
      <div className="section-content">
        <Swiper
          slidesPerView={8}
          loop={true}
          pagination={{
            clickable: true,
          }}
        >
          {list.map((item, i) => (
            <SwiperSlide key={item.id}>
              <CardMovie data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieList;
