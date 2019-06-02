import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = (props) => {
  const { id, image } = props 
  return (
    <Link to={`/book/${id}`}>
      <img src={image} />
    </Link>
  )
}

export default BookCard