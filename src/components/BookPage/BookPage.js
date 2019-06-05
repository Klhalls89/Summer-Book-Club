import React from 'react'
import PropTypes from 'prop-types';

export const BookPage = (props) => {
  const { by, title, image, description, purchase } = props 
  return(
    <div className="book-page">
      <h2>{title}</h2>
      <img src={image} />
      <p>{by}</p>
      <p>{description}</p>
    </div>
  )
}

BookCard.propTypes = {
  props: PropTypes.object
}