import React, { Component } from 'react';
import Choices from './components/Choices';

export default class App extends Component {
  state = {
    userChoice: "",
    compChoice: "",
    options: [
      {
        name: "rock",
        id: 1
      },
      {
        name: "paper",
        id: 2
      },
      {
        name: "scissors",
        id: 3
      },
    ]
  };

  updateUserChoice = (e) => {
    this.setState({userChoice: e}, () => {
      console.log(this.state.userChoice)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Rock Paper Scissors</h1>
        <div className="choices">
          <Choices options={this.state.options} choice={this.updateUserChoice} stateUserChoice={this.state.userChoice} />
        </div>
      </div>
    )
  }
}

