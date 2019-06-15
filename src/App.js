import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      turn: "X",
      winnerTag: "",
      count: 1,
      gameEnded: false,
      board: Array(9).fill("")
    };
  }
  checkWinner() {
    // console.log("here");
    let moves = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    var board = this.state.board;
    for (let i = 0; i < moves.length; i++) {
      // console.log(board[moves[i][0]], board[moves[i][1]]);
      if (
        board[moves[i][0]] === board[moves[i][1]] &&
        board[moves[i][1]] === board[moves[i][2]]
      ) {
        return board[moves[i][0]];
      }
    }

    if (this.state.count === 9) {
      return 9;
    }
    // return "";
  }
  click(event) {
    if (
      this.state.board[event.target.dataset.square] === "" &&
      this.state.gameEnded === false
    ) {
      this.state.board[event.target.dataset.square] = this.state.turn;
      event.target.innerText = this.state.turn;

      this.setState({
        turn: this.state.turn === "X" ? "O" : "X",
        board: this.state.board,
        count: this.state.count + 1
      });
    }

    console.log(this.state.count);
    var result = this.checkWinner();
    if (result === "X") {
      this.setState({
        gameEnded: true,
        winnerTag: "The Winner is X"
      });

      // console.log("yeah");
    } else if (result === "O") {
      this.setState({
        gameEnded: true,
        winnerTag: "The Winner is O"
      });
    } else if (result === 9) {
      this.setState({
        gameEnded: true,
        winnerTag: "The match is a Draw"
      });
    }

    console.log(this.state.gameEnded);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span>
            <div id="head">
              Tic Tac Toe
              <button
                type="button"
                id="buttonStyle"
                className="btn btn-outline-secondary"
                // checked
              >
                Player {this.state.turn}
              </button>
            </div>
          </span>
        </nav>
        <div id="game">
          <div id="head" />
          <div id="head">{this.state.winnerTag}</div>
          <div id="board" onClick={e => this.click(e)}>
            <div className="square" data-square="0" />
            <div className="square" data-square="1" />
            <div className="square" data-square="2" />
            <div className="square" data-square="3" />
            <div className="square" data-square="4" />
            <div className="square" data-square="5" />
            <div className="square" data-square="6" />
            <div className="square" data-square="7" />
            <div className="square" data-square="8" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
