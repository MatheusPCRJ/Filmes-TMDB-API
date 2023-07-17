import { Link } from "react-router-dom";

import {FaStar} from 'react-icons/fa'

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({Filmes, showLink = true}) => {
    return (
        <div className="movie-card">
            <img src={imageUrl + Filmes.poster_path} alt={Filmes.title} />
            <h2>{Filmes.title}</h2>
            <p>
                <FaStar /> {Filmes.vote_average}
            </p>
            {showLink && <Link to={`/movie/${Filmes.id}`}>Detalhes</Link>}
        </div>
    )
}
export default MovieCard