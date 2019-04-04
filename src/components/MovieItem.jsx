import React, { Component } from 'react';
import './MovieItem.css';
import PropTypes from 'prop-types';
import ScoreStar from "./ScoreStar";
import MovieComments from "./MovieComments";

class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false }
      }

    showDetail() {
        this.setState((state) => ({
            expanded: !state.expanded
          }));
    }

  render() {
      const { movie } = this.props
      const { expanded } = this.state
        return (
        <div className="movie-item-container" onClick={() => this.showDetail()}>
            <div className="movie-item-banner">
                <img className="movie-item-image" src={movie.url} alt={movie.name} />
            </div>
            <div className="movie-item-info">
                <h1>{movie.name} ({movie.year})</h1>
                <ScoreStar score={movie.score}/>
                <div>
                    {expanded ? <MovieComments comments={movie.comments}/> : null }
                </div>
            </div>
        </div>
        );
  }
}

MovieItem.propTypes = {
    movie: PropTypes.object.isRequired,
};

export default MovieItem;
