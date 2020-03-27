import React, { Component } from 'react'

export default class WhoWon extends Component {

	optionsComp = ['rock', 'paper', 'scissors'];

  whoWins = () => {
    let uc = this.props.userChoice;
    let cc = this.optionsComp[
      Math.floor(Math.random() * this.optionsComp.length)
    ];

    console.log(uc, cc)

    switch (uc) {
      case cc:
        return console.log("tie")
      case "rock":
        if (cc === 'siccors') {
          console.log('you win');
        } else {
          console.log('you loose');
        }
        break
      case "paper":
        if (cc === 'rock') {
          console.log('you win');
        } else {
          console.log('you loose');
        }
        break
      case "scissors":
        if (cc === 'paper') {
          console.log('you win');
        } else {
          console.log('you loose');
        }
        break
      default:
        return console.log("Error! invalid values")
    }
  };
    render() {
        return (
            <div>
              <button onClick={this.whoWins}>WhoWin?</button>
            </div>
        )
    }
}
