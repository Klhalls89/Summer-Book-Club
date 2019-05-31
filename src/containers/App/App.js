import React, { Component } from 'react';
import { fetchBooks } from '../../utils/fetch';

const API_KEY = `${process.env.REACT_APP_API_KEY}`

class App extends Component {
  constructor() {
    super();
  };

  selectBookType = async(e) => {
    let bookType = e.target.value
    const books = await fetchBooks(API_KEY,bookType)
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
