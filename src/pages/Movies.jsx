import { useState, useEffect } from 'react';
import { getMoviesBySearch } from '../service/movies-api';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const handleSubmit = e => {
    e.preventDefault();

    if (search === '') {
      alert('Please enter movie name');
      return;
    }

    setSearchParams({ search: e.target.elements.search.value });
    e.target.reset();
  };

  useEffect(() => {
    if (!search) return;

    const getMovies = async name => {
      try {
        setIsLoading(true);
        const movies = await getMoviesBySearch(name);
        setMovies([...movies]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies(search);
  }, [search]);

  return (
    <main>
      <SearchBox onSubmit={handleSubmit} />
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <MoviesList movies={movies} state={{ from: location }} />
      )}
    </main>
  );
};

export default Movies;
