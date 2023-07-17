import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
}   from 'react-icons/bs';

import MovieCard from "../components/MovieCard";

import "./Movie.css";

const apiKey = import.meta.env.VITE_API_KEY;
const moviesURL = import.meta.env.VITE_API;

const Movie = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async(url) => {
        const res = await fetch(url)
        const data = await res.json();

        setMovie(data);
    }


    return (
        <div>Movie</div>
    )
}
export default Movie;