import { MoviesInfo } from 'components/MoviesInfo/MoviesInfo';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'service/movies-api';
import { BackLink, Container } from 'pages/MovieDetails.styled';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState();
  const [isLoading, setIsLoading] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async movieId => {
      try {
        setIsLoading(true);
        const movieDetails = await getMovieDetails(movieId);
        setSelectedMovie(movieDetails);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovie(movieId);
  }, [movieId]);

  return (
    <Container>
      <BackLink to={backLinkLocationRef.current}>Back to Movies</BackLink>
      {isLoading ? <p>LOADING...</p> : <MoviesInfo item={selectedMovie} />}

      <ul>
        <li>
          <Link to="cast">Watch casting</Link>
        </li>
        <li>
          <Link to="reviews">Watch reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;