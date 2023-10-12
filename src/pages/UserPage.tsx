import { useEffect, useState } from 'react';
import { Filme } from '../components/filme/filme';
import { getDiscoverMovies } from '../services/moviedb';


export function UserPage() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]); // Adicionar essa linha

  const addFavorite = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  async function handleLoadMovies() {
    try {
      const data = await getDiscoverMovies();
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