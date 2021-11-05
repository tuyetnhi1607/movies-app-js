import React, {useState, useEffect, useRef} from 'react'
import {useParams} from 'react-router'
import tmdbApi from '../../api/tmdbApi';

function Catalog() {
    const {category} = useParams(); 
    const [list, setList] = useState([]);
    const params = {page: 1};

    useEffect(() => {
        const getMovies = async () => {
            if(category === "movie"){
                await tmdbApi.getMoviesList(category, {params})
                .then(response=>{
                    setList(response.results);
                })
                .catch(error => {console.error(error)
                })
            }else {
                await tmdbApi.getTvList(category, {params})
                .then(response=>{
                    setList(response.results);
                })
                .catch(error => {console.error(error);})
            }
            
        }
        getMovies();
    },[])

   console.log("list: ", list);
    return (
        <div>
            
        </div>
    )
}

export default Catalog
