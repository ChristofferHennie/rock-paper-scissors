import React, {Component} from "react";
import PropTypes from "prop-types";

export default class DisplayWinner extends Component {
  resultText = () => {
    switch (this.props.result) {
      case "tie":
        return "Sorry, it's a tie";
      case "win":
        return "Congratulations, you won!";
      case "lose":
        return "Sorry, you lost";
      default:
        return "";
    }
  };

  getStyle = (val) => {
    return {
      display: val ? "block" : "none",
      background: this.switchFunc(val),
    };
  };

  switchFunc = (val) => {
    switch (val) {
      case "tie":
        return "#2A8EEB";
      case "win":
        return "#31FF1F";
      case "lose":
        return "#FF1310";
      default:
        return "#696969";
    }
  };

  render() {
    return (
      <div
        className='resultStyle'
        style={this.getStyle(this.props.result)}>
        <p>{this.resultText()}</p>
      </div>
    );
  }
}

DisplayWinner.propTypes = {
  result: PropTypes.string.isRequired,
};
