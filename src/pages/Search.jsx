import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MovieGrid.css";

const Search = () => {
    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");


    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const dado = await res.json();
    
        setMovies(dado.results);
      };
    
      useEffect(() => {
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    
        getSearchedMovies(searchWithQueryURL);
    });

    // Perguntar o pq ele colocou um array vazio na linha 28 e dps chamou o query para atualizar.

  return (
    <div className="container">
      <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando...</p>}

        {movies.length > 0 &&
          movies.map((filmes) => <MovieCard key={filmes.id} Filmes={filmes} />)}
      </div>
    </div>
  );
};
export default Search;
