import React, { Component } from 'react'
import Choices from './components/Choices'
import DisplayImages from './components/DisplayImages'
import WhoWon from './components/WhoWins'

export default class App extends Component {
  state = {
    userChoice: "paper",
    compChoice: "paper",
    whoWon: "tie",
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
    this.setState({ userChoice: e }, () => {
      console.log(this.state.userChoice)
    })
  }

  whoWon = (compChoice, whoWon) => {
    this.setState(compChoice, whoWon, () => console.log(this.state.whoWon))
  }

  render() {
    return (
      <div className="App">
        <h1>Rock Paper Scissors</h1>
        <div className="choices">
          <Choices 
            options={this.state.options} 
            choice={this.updateUserChoice} 
            stateUserChoice={this.state.userChoice} 
          />
        </div>
        <WhoWon 
          userChoice={this.state.userChoice} 
          whoWon={this.whoWon} 
          className="whoWinsBTN"
        />
        <DisplayImages 
          compChoice={this.state.compChoice} 
          userChoice={this.state.userChoice}
          whoWon={this.state.whoWon}
        />
      </div>
    )
  }
}