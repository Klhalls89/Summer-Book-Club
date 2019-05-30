import React, { Component } from 'react';
import './App.css';

const API_KEY = `${process.env.REACT_APP_API_KEY}`

class App extends Component {
  constructor() {
    super();
  };

  selectBookType = (e) => {
    let bookType = e.target.value
    this.fetchBooks(bookType)
  }
 
  fetchBooks = (bookType) => {
    console.log('fetchBooks')
    console.log(bookType)
    const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-${bookType}.json?api-key=${API_KEY}`
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data.results.books))
  }

  render() {
    return (
      <div className="App">
        <h1>Summer Book Club</h1>
        <button onClick={(e) => this.selectBookType(e)} value='fiction'>fiction</button>
        <button onClick={(e) => this.selectBookType(e)} value='nonfiction'>nonfiction</button>
      </div>
    );
  };
};

export default App;
