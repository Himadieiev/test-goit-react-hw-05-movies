// import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState(['movie-1', 'movie-2', 'movie-3']);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';
  // useEffect(() => {HTTP},[]);

  console.log(setMovies); //для того, что деплоилось, функционал никакой

  const updateQueryString = evt => {
    const movieIdVaue = evt.target.value;
    if (movieIdVaue === '') {
      return setSearchParams({});
    }

    setSearchParams({ movieId: movieIdVaue });
  };

  const visibleMovies = movies.filter(movie => movie.includes(movieId));

  return (
    <div>
      <input type="text" value={movieId} onChange={updateQueryString} />
      <ul>
        {visibleMovies.map(movie => {
          return (
            <li key={movie}>
              <Link to={`${movie}`} state={{ from: location }}>
                {movie}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
