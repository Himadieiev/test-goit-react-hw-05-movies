import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';

const Cast = () => {
  // useEffect(() => {HTTP},[]);
  const { movieId } = useParams();
  return <div>Cast: {movieId}</div>;
};

export default Cast;
