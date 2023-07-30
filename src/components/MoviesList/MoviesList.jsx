import { Link } from 'react-router-dom';
import { MoviesInfo } from './MoviesList.styled';

export const MoviesList = ({ movies, state }) => {
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <MoviesInfo key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={state}>
              <p>{movie.title}</p>
            </Link>
          </MoviesInfo>
        ))}
      </ul>
    </div>
  );
};