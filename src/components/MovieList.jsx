import React, { Component } from 'react';
import './MovieList.css';
import MovieItem from './MovieItem'
import PropTypes from 'prop-types';

class MovieList extends Component {
  

  orderByScore(data){
    data.sort((a,b) => a.score - b.score).reverse();
    return data
  }

  render() {
    const { movies } = this.props
    const ordered = this.orderByScore(movies)
    return (
      <div className="movie-list">
        <ol>
          {ordered.map(movie => <MovieItem key={movie.id} movie={movie}/>)}
        </ol>
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
