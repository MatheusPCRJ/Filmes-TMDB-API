const apiKey = import.meta.env.VITE_API_KEY;
const moviesURL = import.meta.env.VITE_API;

import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";

import "./MovieGrid.css"

const Home = () => {
  const [filmes, setFilmes] = useState([]);
  // console.log(filmes);

  const pegaDados = async (url) => {
    const res = await fetch(url);
    const dado = await res.json();

    setFilmes(dado.results);
  };

  useEffect(() => {
    const pegaDadosURL = `${moviesURL}popular?${apiKey}`;

    pegaDados(pegaDadosURL);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {filmes.length === 0 && <p>Carregando...</p>}

        {filmes.length > 0 && filmes.map((filmes) => 
          <MovieCard key={filmes.id}  Filmes={filmes}/> )}
      </div>
    </div>
  );
};
export default Home;
