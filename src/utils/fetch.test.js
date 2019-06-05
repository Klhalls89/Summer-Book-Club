import React from 'react';
import { booksCleaner } from './cleaner';
import { fetchBooks } from './fetch';

describe ('fetchBooks', () => {
  const mockBooks = [{title: 'the best one'},{title: 'these cats'}];

  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(mockBooks)
  }));

  it('calls fetch with the correct data', () => {
    const url = 'www.url.com'
    expect(window.fetch).toHaveBeenCalledWith(url)
  }); 
});


