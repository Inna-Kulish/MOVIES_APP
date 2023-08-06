import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { getReviews } from "services/getMovies"
import { Item, Author } from "./Reviews.styled";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getMovieReviews = async (movieId) => {
            await getReviews(movieId).then(data => {
                setReviews(data.results);
             }).catch(error => {
                console.log(error);
              })
           }

           getMovieReviews(movieId);
      }, [movieId]);

    return (
<ul>
    {reviews.length !== 0 ? reviews.map(({author, id, content}) => 
    <Item key={id}>
        <Author>Author: {author}</Author>
        <p>{content}</p>
        </Item>
    ): <p>We don`t have any reviews for this movie.</p>}
</ul>
    )
}

export default Reviews;