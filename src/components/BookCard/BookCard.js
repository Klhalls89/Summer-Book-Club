import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = (props) => {
  const { id, image } = props 
  return (
    <div className="book-card">
      <Link to={`/book/${id}`}>
        <img src={image} />
      </Link>
    </div>
  )
}

export default BookCard