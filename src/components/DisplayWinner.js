import React, {Component} from "react";

export default class DisplayWinner extends Component {
  whoWonText = () => {
    switch (this.props.whoWon) {
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

  render() {
    return (
      <div className='whoWonStyle'>
        <p>{this.whoWonText()}</p>
      </div>
    );
  }
}
