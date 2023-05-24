import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';

const Reviews = () => {
  // useEffect(() => {HTTP},[]);

  const { movieId } = useParams();
  return <div>Reviews: {movieId}</div>;
};

export default Reviews;
