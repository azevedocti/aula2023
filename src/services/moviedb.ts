const endpoint = 'https://api.themoviedb.org/v3';
const token = '';

const config = {
  headers: {
    Autorization: 'Bearer ' + token
  },
};

export async function getDiscoverMovies(){
  const response = await fetch(endpoint + "/discover/movie", config);
  const data = response.json();
  return data;
}