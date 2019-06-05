import React, { Component } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class BooksContainer extends Component {
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

BooksContainer.propTypes = {
  books: PropTypes.array
}

export const mapStateToProps = (state) => ({
  books: state.books
});

export default connect(mapStateToProps)(BooksContainer);
