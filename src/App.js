import React, { Component } from 'react';
import './App.css';

const API_KEY = `${process.env.REACT_APP_API_KEY}`
const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`

class App extends Component {
  constructor() {
    super();
    this.state = {
      book: []
    };
  };

  componentDidMount = () => {
    this.fetchBooks()
  }

  fetchBooks = () => {
    console.log('fetchBooks')
    fetch(url)
    .then(response => response.json())
    .then(data => this.resetState(data.results.books))
  }

  resetState = (books) => {
    this.setState({
      books
    })
  }

  render() {
    console.log(url)
    console.log(this.state.books)
    return (
      <div className="App">
        <h1>Summer Book Club</h1>
      </div>
    );
  };
};



 


export default App;
