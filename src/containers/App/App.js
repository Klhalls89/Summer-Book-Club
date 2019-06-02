import React, { Component } from 'react';
import { fetchBooks } from '../../utils/fetch';
import BooksContainer from '../../components/BooksContainer/BooksContainer';
import { Route, Switch, withRouter } from 'react-router-dom'

const API_KEY = `${process.env.REACT_APP_API_KEY}`

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: []
    }
  }


 selectBookType = async (e) => {
    let bookType = e.target.value
    try {
      const books = await fetchBooks(API_KEY,bookType)
      this.setState({
        books
      })
      this.props.history.push('/books')
    } catch(error) {
      console.log(error)
    }
  } 

  render() {
    return (
      <div className="App">
        <h1>Summer Book Club</h1>
        <button onClick={(e) => this.selectBookType(e)} value='fiction'>fiction</button>
        <button onClick={(e) => this.selectBookType(e)} value='nonfiction'>nonfiction</button> 
        <Switch>
          <Route path='/book/:id'render={({ match }) => {
            const books = this.state.books
            console.log(books)
            const book = books.find(book => book.id === match.params.id);
            if (!book) {
              return (<div>This book does not exist! </div>);  
            }
            return (<div>book page</div>)
            }} 
          /> 
          <Route path='/books' render={() => <BooksContainer books={this.state.books} />} />
        </Switch>
      </div>
    );
  };
};


export default withRouter(App);
//withrouter connect mstp mdtp app
