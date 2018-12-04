import React from 'react';
import Board from '../Board';
import calculateWinner from './utils';

class Game extends React.Component {
  constructor(props) {
    super(props);
    /*
      Before we implement jumpTo, we’ll add stepNumber to the Game component’s state
      to indicate which step we’re currently viewing.
    */
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  /*
    We will now make a few changes to the
    Game’s handleClick method which fires when you click on a square.
   */
  handleClick(i) {
    const { history, xIsNext } = this.state;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !xIsNext,
    });
  }

  /*
    Next, we'll define the jumpTo method in Game to update that stepNumber
    We also set xIsNext to true if the number that we're changing  stepNumber
    is even(numar par)
  */

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  /*
    Finally, we will modify the Game component’s render method from always rendering
    the last move to rendering the currently selected move according to stepNumber:
  */

  restartGame() {
    this.setState({
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    });
  }

  render() {
    /*
      Destructuring
      Sintactic sugar equivalent with "const history = this.state.history;"
    */
    const { history, stepNumber, xIsNext } = this.state;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      const stepSelected = move === stepNumber;
      return (
        <li className={stepSelected && 'active'}>
          <button type="button" onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>

        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>

        <div classNmae="game-restart">
          <button type="button" onClick={this.restartGame.bind(this)}>
            <span>Restart</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Game;
