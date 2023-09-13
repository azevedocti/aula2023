import { useEffect, useState } from "react";
import { getDiscoverMovies } from "../services/moviedb";

export function UserPage(){
  const [movies, setMovies] = useState([]);
  async function handleLoadMovies(){
    const data = await getDiscoverMovies();
    setMovies(data.results);
  }
  useEffect(() => {
    handleLoadMovies();
  }, []);
  return (
    <>
    <h1>Bem-vindo!</h1>
    <hr/>
    <h2>Seus Filmes</h2>
    <hr/>
    <h2> Veja outros lançamentos!</h2>
    {movies?.map(movie => {
      return <div>{movie.original_title}</div>;
    })}
    </>
  )
}