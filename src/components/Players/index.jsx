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
    this.setState({
      clicked: true
    });
  }

  render () {
    console.log(this.state.clicked);

    return this.state.clicked 
      ? <Game />
      : (
        <form>
          
          <label>Player 1:</label>
          <input type="text" name="player1" onChange={this.handleFirstPlayerChange}/>
          
          <label>Player 2:</label>
          <input type="text" name="player2"  onChange={this.handleSecondPlayerChange}/>
          
          <button type="submit" value="Start game" onClick={this.handleClick}>
          </button>
        </form>
      );
  }
}

export default Players;
