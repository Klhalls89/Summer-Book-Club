import React, { Component } from 'react';
import BookCard from '../BookCard/BookCard'
import { connect } from 'react-redux'



class BooksContainer extends Component {
  constructor() {
    super()
  }

  render() {
    const showBooks = this.props.books.map(book => <BookCard {...book} key={book.id} />
  )
    return(
    <div>
      {showBooks}
    </div>
    );
  }  
};

const mapStateToProps = (state) => ({
  books: state.books
})

export default connect(mapStateToProps)(BooksContainer);
