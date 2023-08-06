import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieById } from 'services/getMovies';
import { BackLink } from 'components/BackLink/BackLink';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { AddInfoBox, AddInfoTitle } from 'components/MovieDetails/MovieDetails.styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    const getMovieDetails = async (movieId) => {
      await getMovieById(movieId).then(movies => {
         setDetails(movies);
       });
     };

    getMovieDetails(movieId);
  }, [movieId]);

  return (
    <div>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {details && <MovieDetails details={details}/>}
      <AddInfoBox>
      <AddInfoTitle>Additional information</AddInfoTitle>
      <ul>
        <li><Link to='cast' state={{ from: backLinkHref }}>Cast</Link></li>
        <li><Link to='reviews' state={{ from: backLinkHref }}>Reviews</Link></li>
      </ul>
      </AddInfoBox>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
