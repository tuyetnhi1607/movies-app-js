import React, {useState, useRef, useEffect} from 'react'
import HeroSlide from '../../components/heroslide/HeroSlide'
import './home.scss';
import tmdbApi, {tvType, movieType, category} from '../../api/tmdbApi';
import MovieList from '../../components/movielist/MovieList'


function Home() {

    return (
        <div>
            <HeroSlide />
            {/* section */}
            <MovieList category="movie" type="popular" title="Trending Movie"/>
            <MovieList category="tv" type="popular" title="Trending Tv"/>
            <MovieList category="movie" type="top_rated" title="Top Rate Movie"/>
            <MovieList category="tv" type="top_rated" title="Top Rate Tv"/>
        </div>
    )
}

export default Home
