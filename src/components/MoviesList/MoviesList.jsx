import { Link, useLocation } from "react-router-dom";


const MoviesList = ({movies}) => {
  const location = useLocation();

    return(
    <ol>
    {movies && movies.map(({id, title}) => (
    <li key={id}><Link to={`/movies/${id}`} state={{ from: location }}>
    {title}</Link></li>
  ))}</ol>
  )
};

export {MoviesList}