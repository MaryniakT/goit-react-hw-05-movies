import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/movies-api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async movieId => {
      try {
        const reviewsData = await getMovieReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.log(error);
      }
    };

    getReviews(movieId);
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length ? (
        <div>
          {reviews?.map(review => (
            <div key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>There are no reviews for that movie</p>
      )}
    </div>
  );
};

export default Reviews;