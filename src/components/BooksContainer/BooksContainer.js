import React from 'react';
import BookCard from '../BookCard/BookCard'


const BooksContainer = (props) => {
  const showBooks = props.books.map(book => <BookCard {...book} key={book.id} />
  )
  return(
    <div>
      BooksContainer
      {showBooks}
    </div>
  );
};

export default BooksContainer;
