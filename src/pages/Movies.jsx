import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../services/getMovies';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Container } from 'components/SharedLayout/SharedLayout.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieRequest = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieRequest) {
      return;
    }

    const getMoviesList = async movieRequest => {
      await searchMovies(movieRequest)
        .then(data => {
          if (data.results.length === 0) {
            alert(
              'Sorry, there are no movies matching your search query. Please try again.'
            );
          }
          setMovies(data.results);
        })
        .catch(error => {
          console.log(error);
        });
    };

    getMoviesList(movieRequest);
  }, [movieRequest]);

  const handleFormSubmit = query => {
    if (movieRequest === query) {
      return;
    }
    setSearchParams({ query: query });
  };

  return (
    <Container>
      <SearchBox onSubmit={handleFormSubmit} />
      <MoviesList movies={movies} />
    </Container>
  );
};

export default Movies;
