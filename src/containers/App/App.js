import React, { Component } from 'react';
import { fetchBooks } from '../../utils/fetch';
import BooksContainer from '../BooksContainer/BooksContainer';
import { Route, Switch, withRouter } from 'react-router-dom';
import {  toggleLoading, storeBooks, setError } from '../../actions/actions';
import { connect } from 'react-redux'
import { Loading } from '../../components/Loading/Loading'
import { BookPage } from '../../components/BookPage/BookPage'

const API_KEY = `${process.env.REACT_APP_API_KEY}`

class App extends Component {
  constructor() {
    super()
  }

 selectBookType = async (e) => {
    this.props.toggleLoading(true)
    let bookType = e.target.value
    try {
      const books = await fetchBooks(API_KEY,bookType)
      this.props.storeBooks(books)
      this.props.history.push('/books')
      this.props.toggleLoading(false)
    } catch(error) {
      this.props.setError(error)
    }
  } 

  render() {
    return (
      <div className="App">
        <h1>Summer Book Club</h1>
        <button onClick={(e) => this.selectBookType(e)} value='fiction'>fiction</button>
        <button onClick={(e) => this.selectBookType(e)} value='nonfiction'>nonfiction</button>
        {this.props.loading && <Loading />} 
        <Switch>
          <Route path='/book/:id'render={({ match }) => {
            const { books } = this.props
      
            const book = books.find(book => book.id === match.params.id);
            if (!book) {
              return (<div>This book does not exist! </div>);  
            }
            return (<BookPage {...book} />)
            }} 
          /> 
          <Route path='/books' render={() => <BooksContainer />} />
        </Switch>
      </div>
    );
  };
};

export const mapStateToProps = (state) => ({
  loading: state.loading,
  books: state.books
})

export const mapDispatchToProps=(dispatch) => {
  return {
    toggleLoading: (bool) => {dispatch(toggleLoading(bool))},
    storeBooks: (books) => {dispatch(storeBooks(books))},
    error: (error) => {dispatch(error(error))}
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
//withrouter connect mstp mdtp app
