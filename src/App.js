import React, {Component} from "react";
import Choices from "./components/Choices";
import DisplayImages from "./components/DisplayImages";
import Result from "./components/Result";
import Score from "./components/Score";

export default class App extends Component {
  state = {
    userChoice: "paper",
    compChoice: "paper",
    result: "",
    playerScore: 0,
    compScore: 0,
    options: [
      {
        name: "rock",
        id: 1,
      },
      {
        name: "paper",
        id: 2,
      },
      {
        name: "scissors",
        id: 3,
      },
    ],
  };

  updateUserChoice = (e) => {
    this.setState({userChoice: e, result: ""}, () =>
      console.log(this.state.userChoice)
    );
  };

  result = (compChoice, result) => {
    this.updateScore();
    this.setState(compChoice, result, () => {
      console.log(this.state.result);
    });
  };

  updateScore = (result = this.state.result) => {
    switch (result) {
      case "win":
        return this.setState(
          (prevPlayerScore = this.state.playerScore) => {
            return (
              {
                playerScore: prevPlayerScore++,
              },
              () => console.log(this.state.compScore)
            );
          }
        );
      case "lose":
        return this.setState(
          (prevCompScore = this.state.compScore) => {
            return (
              {
                compScore: prevCompScore++,
              },
              () => console.log(this.state.compScore)
            );
          }
        );
      default:
        return console.log("tie");
    }
  };

  render() {
    return (
      <div className='App'>
        <h1>Rock Paper Scissors</h1>
        <Score
          playerScore={this.state.playerScore}
          compScore={this.state.compScore}
        />
        <div className='options'>
          <Choices
            options={this.state.options}
            choice={this.updateUserChoice}
            stateUserChoice={this.state.userChoice}
          />
        </div>
        <Result
          userChoice={this.state.userChoice}
          result={this.result}
          className='resultBTN'
        />
        <DisplayImages
          compChoice={this.state.compChoice}
          userChoice={this.state.userChoice}
          result={this.state.result}
        />
      </div>
    );
  }
}
