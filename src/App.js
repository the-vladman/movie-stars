import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MovieList from './components/MovieList'

class App extends Component {
  render() {
    
    const movies = [
      {
        id: 1,
        name: 'Batman',
        year: 1990,
        score: 1,
        comments: [
          'un comment',
          'dos cooment',
        ],
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Ch9thTlG8RyJ44QPtuPDze4X-Rc173z6nyG6N5Bo73TUgEc3'
      },
      {
        id: 2,
        name: 'Batman FOrever',
        year: 1992,
        score: 3,
        comments: [
          'un comment',
          'dos cooment',
        ],
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Ch9thTlG8RyJ44QPtuPDze4X-Rc173z6nyG6N5Bo73TUgEc3'
      },
      {
        id: 3,
        name: 'Dark Knight',
        year: 2010,
        score: 5,
        comments: [
          'un comment',
          'dos cooment',
        ],
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Ch9thTlG8RyJ44QPtuPDze4X-Rc173z6nyG6N5Bo73TUgEc3'
      },
    ]
    return (
      <div className="App">
        <MovieList movies={movies}/>
      </div>
    );
  }
}

export default App;
