import { useState, useEffect } from 'react';
import { getTrendMovies } from 'services/getMovies';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { Main, Title } from 'components/Home/Home.styled';

const Home = () => {
  const [trendMoviesData, setTrendMoviesData] = useState([]);

  useEffect(() => {
    function trendMovies() {
      getTrendMovies()
        .then(movies => {
          setTrendMoviesData(movies.results);
        })
        .catch(error => {
          console.log(error);
        });
    }

    trendMovies();
  }, []);

  return (
    <Main>
      <Title>Trending today</Title>
      <MoviesList movies={trendMoviesData} />
    </Main>
  );
};

export default Home;
