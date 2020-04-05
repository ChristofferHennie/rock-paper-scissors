import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Score extends Component {
  render() {
    return (
      <div className='parent-score-board'>
        <div className='score-board'>
          <p className='opponents'>Player</p>
          <p className='score'>
            {this.props.playerScore}:{this.props.compScore}
          </p>
          <p className='opponents'>Comp</p>
        </div>
      </div>
    );
  }
}

Score.propTypes = {
  playerScore: PropTypes.number.isRequired,
  compScore: PropTypes.number.isRequired,
};
