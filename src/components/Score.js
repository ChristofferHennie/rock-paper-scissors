import React, {Component} from "react";

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
