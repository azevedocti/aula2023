import { useEffect, useState } from 'react';
import { Filme } from '../components/filme/filme';

import { getDiscoverMovies } from '../services/moviedb';

export function UserPage() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addFavorite = async (movie) => {
    const movieData = {
        original_title: movie.original_title,
        release_date: movie.release_date,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average
    };

    try {
        await addItem('favorites', movie.original_title, movieData);
        setFavorites((prevFavorites) => [...prevFavorites, movie]);
        alert("Filme salvo:" + movie.original_title);
    } catch (error) {
        console.error("Erro ao adicionar filme aos favoritos:", error);
        alert("Erro ao adicionar filme aos favoritos. Tente novamente.");
    }
  };

  async function handleLoadMovies() {
    try {
      const data = await getDiscoverMovies(); // Certifique-se de ter essa função importada
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    handleLoadMovies();
  }, []);

  return (
    <>
      <h1>Bem-vindo!</h1>
      <hr />
      <h2>Seus favoritos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: "1rem", maxWidth:'800px' }}>
        {favorites.map((movie) => <Filme filme={movie} onFavorite={addFavorite} />)}
      </div>
      <hr />
      <h2>Veja outros lançamentos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: "1rem", maxWidth:'800px' }}>
        {movies.map((movie) => <Filme filme={movie} onFavorite={addFavorite} />)}
      </div>
    </>
  );
}
