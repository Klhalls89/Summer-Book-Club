import React from 'react';
import { booksCleaner } from './cleaner';
import { fetchBooks } from './fetch';

jest.mock('./cleaner')

describe ('fetchBooks', () => {
  const mockBooks = [{title: 'the best one'},{title: 'these cats'}];

  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(mockBooks),
    ok: true
  }));

  it.skip('calls fetch with the correct data', () => {
    window.fetch(url)
    const url = 'www.url.com'
    expect(window.fetch).toHaveBeenCalledWith(url)
  }); 

  it.skip('calls booksCleaner after fetch', async() => {
    booksCleaner = jest.fn()
    await window.fetch()
    expect(booksCleaner).toHaveBeenCalled()
  })

  //should error if fetch failed


});


