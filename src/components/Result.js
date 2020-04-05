import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Result extends Component {
  state = {
    compChoice: "",
    result: "",
    playerScore: 0,
    compScore: 0,
  };

  optionsComp = ["rock", "paper", "scissors"];

  randoButNotTwice = (lastRandom, random) => {
    let min = 0;
    let max = 2;

    if (lastRandom === undefined) {
      random = Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      random = Math.floor(Math.random() * (max - min)) + min;
      if (random >= lastRandom) random += 1;
    }
    lastRandom = random;

    console.log(random);
    return random;
  };

  result = () => {
    let uc = this.props.userChoice;
    let cc = this.optionsComp[this.randoButNotTwice()];

    console.log(uc, cc);

    switch (uc) {
      case cc:
        return this.setState({compChoice: cc, result: "tie"}, () =>
          this.updateScore(this.state.result)
        );
      case "rock":
        if (cc === "scissors") {
          return this.setState({compChoice: cc, result: "win"}, () =>
            this.updateScore(this.state.result)
          );
        } else {
          return this.setState({compChoice: cc, result: "lose"}, () =>
            this.updateScore(this.state.result)
          );
        }
      case "paper":
        if (cc === "rock") {
          return this.setState({compChoice: cc, result: "win"}, () =>
            this.updateScore(this.state.result)
          );
        } else {
          return this.setState({compChoice: cc, result: "lose"}, () =>
            this.updateScore(this.state.result)
          );
        }
      case "scissors":
        if (cc === "paper") {
          return this.setState({compChoice: cc, result: "win"}, () =>
            this.updateScore(this.state.result)
          );
        } else {
          return this.setState({compChoice: cc, result: "lose"}, () =>
            this.updateScore(this.state.result)
          );
        }
      default:
        return console.log("Error! invalid values");
    }
  };

  updateScore = (result) => {
    switch (result) {
      case "win":
        return this.setState(
          {
            playerScore: this.state.playerScore + 1,
          },
          () => this.sendResult()
        );
      case "lose":
        return this.setState(
          {
            compScore: this.state.compScore + 1,
          },
          () => this.sendResult()
        );
      case "tie":
        return this.sendResult();
      default:
        return console.log("Error, invalid value");
    }
  };

  sendResult = () =>
    this.props.result(this.state, () => console.log(this.state));

  render() {
    return (
      <div className='BtnStyle'>
        <button onClick={this.result}>Play!</button>
      </div>
    );
  }
}

Result.protoTypes = {
  userChoice: PropTypes.string.isRequired,
  result: PropTypes.func.isRequired,
};
