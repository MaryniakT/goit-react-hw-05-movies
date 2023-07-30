import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'service/movies-api';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getCasting = async movieId => {
      try {
        const castingData = await getMovieCast(movieId);
        setCast(castingData);
      } catch (error) {
        console.log(error);
      }
    };

    getCasting(movieId);
  }, [movieId]);
  return (
    <div>
      <h2>Casting</h2>
      {cast.length ? (
        <div>
          {cast?.map(actor => (
            <div key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
              <div>
                <h3>{actor.name}</h3>
                <p>Character: {actor.character}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>There is no casting available for that movie</p>
      )}
    </div>
  );
};

export default Cast;