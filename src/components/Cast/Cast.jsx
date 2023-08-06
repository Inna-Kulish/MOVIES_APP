import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import NoPhoto from '../../img/nophoto.jpg'
import { getCast } from "services/getMovies"
import { Photo, CastItem } from "./Cast.styled";

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);

    useEffect(() => {
        const getMovieCast = async (movieId) => {
            await getCast(movieId).then(data => {
                setCast(data.cast);
             }).catch(error => {
                console.log(error);
              })
           }

        getMovieCast(movieId);
      }, [movieId]);

    return (
<ul>
    {cast && cast.map(({cast_id, character, name, profile_path}) =>
        <CastItem key={cast_id}>
            <Photo src={profile_path ? `https://image.tmdb.org/t/p/w200/${profile_path}`: NoPhoto} alt={name} loading="lazy" />
            <p>{name}</p>
            {character && <p>Character: {character}</p>}
            </CastItem>
    )}
</ul>
    )
}

export default Cast;