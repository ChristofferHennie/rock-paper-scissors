import React, {Component} from "react";

export default class result extends Component {
  state = {
    compChoice: "",
    result: "",
    playerScore: 0,
    compScore: 0,
  };

  optionsComp = ["rock", "paper", "scissors"];

  result = () => {
    let uc = this.props.userChoice;
    let cc = this.optionsComp[
      Math.floor(Math.random() * this.optionsComp.length)
    ];

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
