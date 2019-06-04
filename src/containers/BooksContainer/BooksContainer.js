import React, { Component } from 'react';
import BookCard from '../../components/BookCard/BookCard'
import { connect } from 'react-redux'



class BooksContainer extends Component {
  constructor() {
    super()
  }

  render() {
    const showBooks = this.props.books.map(book => <BookCard {...book} key={book.id} />
  )
    return(
    <div className='books-container'>
      {showBooks}
    </div>
    );
  }  
};

export const mapStateToProps = (state) => ({
  books: state.books
})

export default connect(mapStateToProps)(BooksContainer);
