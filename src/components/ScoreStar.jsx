import React, { Component } from 'react';
import './ScoreStar.css';
import PropTypes from 'prop-types';

class ScoreStar extends Component {
  render() {
    const arr = new Array(this.props.score || 1).fill(null);
    return (
      <div className="score-star-container">
      {
          arr.map((item, i)=> <img key={i} className="score-star-image" src='https://cdn3.iconfinder.com/data/icons/stars-5/512/gold_star-512.png' />)
      }
      </div>
    );
  }
}

ScoreStar.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreStar;
