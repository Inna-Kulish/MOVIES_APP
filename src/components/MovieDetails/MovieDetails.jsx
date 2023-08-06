import NoPosterImage from '../../img/noposter.jpg'
import { Container, Poster, Genres, Title, Score, Overview, GenresTitle } from "./MovieDetails.styled";

const MovieDetails = ({ details }) => {
    
  const { title, overview, genres, poster_path, vote_average, release_date } = details;

  const releaseDate = release_date.split('-')[0];

    return (
        <Container>
            <Poster src={poster_path ? `https://image.tmdb.org/t/p/w300/${poster_path}`: NoPosterImage} alt=""/>
      <div>
        <Title>{title}({releaseDate})</Title>
        <Score>User Score: {Math.round((vote_average * 100) / 10)}%</Score>
        <Overview>Overview</Overview>
        <p>{overview}</p>
        <GenresTitle>Genres</GenresTitle>
        <Genres>{genres.map(({id, name}) => <p key={id}>{name}</p>)}</Genres>
      </div>
        </Container>

    )
}

export {MovieDetails}