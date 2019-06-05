import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BookCard = (props) => {
  const { id, image } = props 
  return (
    <div className="book-card">
      <Link to={`/book/${id}`}>
        <img src={image} />
      </Link>
    </div>
  )
};

BookCard.propTypes = {
  props: PropTypes.object
};

export default BookCard;