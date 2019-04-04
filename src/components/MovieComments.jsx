import React, { Component } from 'react';

import PropTypes from 'prop-types';

class MovieComments extends Component {
  render() {
      const { comments } = this.props
    return (
      <div className="comments-container">
      {
          comments.map(commet => <p>commet</p>)
      }
      </div>
    );
  }
}

MovieComments.propTypes = {
    comments: PropTypes.array.isRequired,
};

export default MovieComments;
