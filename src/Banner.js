import React, { useState, useEffect } from 'react'
import axios from './axios'
import requests from './request'
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchnetflixoriginals);

            //This sets the "movie" variable with one random movie of array
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )

        }
        fetchData()
    }, [])

    //Random movie from movie array
    console.log(movie);

    const truncate=(str,n)=>{
        return str?.length>n?str.substr(0,n-1)+"...":str;
    }

    return (
        /* Back ground image*/
        /* title */
        /* div with 2 buttons*/
        /*description*/
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}>

            <div className="banner_contents">
                <h1 className="banner_title">
                    {/*movie?.name--------> ?.-----> ensure that code doesnt crash even if name is not found*/}
                    {/* || ----------> if movie.title or movie.name or movie.original_name*/}
                    {movie?.title || movie?.name || movie?.original_name}
                    <div className="banner_buttons">
                        <button className="banner_button">Play</button>
                        <button className="banner_button">My List</button>
                    </div>

                    <h1 className="banner_description">{truncate(movie?.overview,150)}</h1>
                </h1>
            </div>

            <div className="banner_fadeBottom"></div>
        </header>
    )
}

export default Banner
