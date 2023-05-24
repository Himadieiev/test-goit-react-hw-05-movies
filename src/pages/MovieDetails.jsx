import { useRef } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
// import { useEffect } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');
  // useEffect(() => {HTTP},[]);

  return (
    <>
      <h2>MoviesDetails: {movieId}</h2>
      <Link to={backLink.current}>Go back</Link>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
