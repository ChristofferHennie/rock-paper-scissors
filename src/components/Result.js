import React, {Component} from "react";

export default class result extends Component {
  state = {
    compChoice: "",
    result: "",
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
          this.sendResult()
        );
      case "rock":
        if (cc === "scissors") {
          return this.setState({compChoice: cc, result: "win"}, () =>
            this.sendResult()
          );
        } else {
          return this.setState({compChoice: cc, result: "lose"}, () =>
            this.sendResult()
          );
        }
      case "paper":
        if (cc === "rock") {
          return this.setState({compChoice: cc, result: "win"}, () =>
            this.sendResult()
          );
        } else {
          return this.setState({compChoice: cc, result: "lose"}, () =>
            this.sendResult()
          );
        }
      case "scissors":
        if (cc === "paper") {
          return this.setState({compChoice: cc, result: "win"}, () =>
            this.sendResult()
          );
        } else {
          return this.setState({compChoice: cc, result: "lose"}, () =>
            this.sendResult()
          );
        }
      default:
        return console.log("Error! invalid values");
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
