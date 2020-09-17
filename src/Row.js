import React, { useState, useEffect } from 'react'
import axios from "./axios"
import './Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const baseurl = "https://image.tmdb.org/t/p/original/"


function Row({ title, fetchURL, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")


    //Snippet of code which runs on specific condition
    useEffect(() => {
        
        

        async function fetchData() {
            const request = await axios.get(fetchURL);
            console.log(request.data.results);
            setMovies(request.data.results)

            
            return request;
        }
        fetchData();
        //if []-> run once when page loads and dont run again
        //if [movies]-> run once on load and run everytime movies changes
    }, [fetchURL])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }

    const handleClick=(movie)=>{
        if(trailerUrl){
            setTrailerUrl('')
        }else{
            movieTrailer(movie?.name||"").then((url)=>{
                const urlParams= new URLSearchParams(new URL(url).search) ;
                setTrailerUrl(urlParams.get('v'))
            }).catch((error)=>{
                console.log(error);
            })
        }

    }


    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => {
                    return <img
                        onClick={(movie)=> handleClick(movie)}
                        key={movie.id}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${baseurl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}>
                    </img>
                })}
            </div>
            {trailerUrl&&<YouTube videoId={trailerUrl} opts={opts}></YouTube>
        }
        </div>
    )
}

//ANOTHER CORRECT WAY
// function Row(props) {
//     console.log(props);

//     return (
//         <div>
//             <h2>{props.title}</h2>
//         </div>
//     )
// }

export default Row


