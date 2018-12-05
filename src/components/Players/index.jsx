import React from 'react';
import Game from '../Game';
class Players extends React.Component {
  constructor() {
    super();
    this.state = { 
      player1: '',
      player2: '',
      clicked: false
    };
    
    this.handleFirstPlayerChange = this.handleFirstPlayerChange.bind(this);
    this.handleSecondPlayerChange = this.handleSecondPlayerChange.bind(this);
  }

  handleFirstPlayerChange (evt) {
    this.setState({
        player1: evt.target.value
      });
  }

  handleSecondPlayerChange (evt) {
    this.setState({
      player2: evt.target.value
    });
  }
  
  handleClick = () => {
    const { player1, player2 } = this.state;

    if (player1.length > 0 && player2.length > 0) {
      this.setState({
        clicked: true
      });
    }

  }

  render () {
    return this.state.clicked 
      ? <Game player1 = {this.state.player1} player2 = {this.state.player2}/>
      : (
        <form>
          
          <label htmlFor="p1">Player 1:</label>
          <input type="text" name="player1" id="p1" onChange={this.handleFirstPlayerChange}/>
          
          <label htmlFor="p2">Player 2:</label>
          <input type="text" name="player2" id="p2" onChange={this.handleSecondPlayerChange}/>
          
          <button type="submit" value="Start game" onClick={this.handleClick}>
            Start game
          </button>

        </form>
      );
  }
}

export default Players;

