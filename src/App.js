import React, { Component } from 'react'
import Choices from './components/Choices'
import DisplayImages from './components/DisplayImages'
import WhoWon from './components/WhoWins'

export default class App extends Component {
  state = {
    userChoice: "paper",
    compChoice: "paper",
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

  render() {
    return (
      <div className="App" style={localStyle}>
        <h1>Rock Paper Scissors</h1>
        <div className="choices">
          <Choices 
            options={this.state.options} 
            choice={this.updateUserChoice} 
            stateUserChoice={this.state.userChoice} 
          />
        </div>
        <WhoWon userChoice={this.state.userChoice} className="whoWinsBTN"/>
        <DisplayImages 
          compChoice={this.state.compChoice} 
          userChoice={this.state.userChoice}
        />
      </div>
    )
  }
}


const localStyle = {
  maxWidth: window.screen.width + 'px'
}
