import React, {Component} from "react";
import DisplayWinner from "./DisplayWinner";
import paperSVG from "../assets/svg/paper.svg";
import rockSVG from "../assets/svg/rock.svg";
import scissorsSVG from "../assets/svg/scissors.svg";
import questionMarkSVG from "../assets/svg/questionMark.svg";

export default class DisplaySVG extends Component {
  updateImage = (input) => {
    switch (input) {
      case "rock":
        return rockSVG;
      case "paper":
        return paperSVG;
      case "scissors":
        return scissorsSVG;
      default:
        return questionMarkSVG;
    }
  };

  render() {
    return (
      <div className='images'>
        <img
          src={this.updateImage(this.props.userChoice)}
          alt='Rock Paper Scissors'
        />
        <DisplayWinner result={this.props.result} />
        <img
          src={this.updateImage(this.props.compChoice)}
          alt='Rock Paper Scissors'
        />
      </div>
    );
  }
}
