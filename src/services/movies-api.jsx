const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'e01762263039f51c2451965e3f15f759';
  
function fetchMovies (ENDPOINT) {
    const params = new URLSearchParams({
        api_key: API_KEY,
        language: 'en-US',
      });

   return fetch(`${BASE_URL}${ENDPOINT}${params}`)
   .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .catch(error => console.log(error));
}
  
 const moviesApi = {
    fetchMovies,
  };

  export {moviesApi};