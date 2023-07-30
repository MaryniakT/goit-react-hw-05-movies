import { Container, Wrapper } from './MoviesInfo.styled';

export const MoviesInfo = ({
  item: {
    original_title,
    release_date,
    poster_path,
    genres,
    overview,
    vote_average,
  },
}) => {
  const releaseDate = new Date(release_date).getFullYear();

  const image = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : '';

  const score = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'No Score';

  return (
    <Container>
      <img src={image} alt={original_title} width="320" />
      <Wrapper>
        <h1>
          {original_title} ({releaseDate})
        </h1>
        <p>User score: {score}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genres.map(genre => genre.name).join(', ')}</p>
      </Wrapper>
    </Container>
  );
};