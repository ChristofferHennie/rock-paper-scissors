import React, {Component} from "react";

export default class WhoWon extends Component {
  state = {
    compChoice: "",
    whoWon: "",
  };

  optionsComp = ["rock", "paper", "scissors"];

  whoWins = () => {
    let uc = this.props.userChoice;
    let cc = this.optionsComp[
      Math.floor(Math.random() * this.optionsComp.length)
    ];

    console.log(uc, cc);

    switch (uc) {
      case cc:
        return this.setState({compChoice: cc, whoWon: "tie"}, () =>
          this.whoWon()
        );
      case "rock":
        if (cc === "siccors") {
          return this.setState({compChoice: cc, whoWon: "win"}, () =>
            this.whoWon()
          );
        } else {
          return this.setState({compChoice: cc, whoWon: "lose"}, () =>
            this.whoWon()
          );
        }
      case "paper":
        if (cc === "rock") {
          return this.setState({compChoice: cc, whoWon: "win"}, () =>
            this.whoWon()
          );
        } else {
          return this.setState({compChoice: cc, whoWon: "lose"}, () =>
            this.whoWon()
          );
        }
      case "scissors":
        if (cc === "paper") {
          return this.setState({compChoice: cc, whoWon: "win"}, () =>
            this.whoWon()
          );
        } else {
          return this.setState({compChoice: cc, whoWon: "lose"}, () =>
            this.whoWon()
          );
        }
      default:
        return console.log("Error! invalid values");
    }
  };

  whoWon = () =>
    this.props.whoWon(this.state, () => console.log(this.state));

  render() {
    return (
      <div>
        <button onClick={this.whoWins}>WhoWin?</button>
      </div>
    );
  }
}
