import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ol>
      {movies.length !== 0 &&
        movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
    </ol>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export { MoviesList };
