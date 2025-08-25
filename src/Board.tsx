import React, { useState } from "react";

function Square({ name, value, onClick }) {
  return (
    <button className="square" onClick={onClick} key={name}>
      {value}
    </button>
  );
}

function calculateWinner(currentSquares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      currentSquares[a] &&
      currentSquares[a] === currentSquares[b] &&
      currentSquares[a] === currentSquares[c]
    ) {
      return currentSquares[a];
    }
  }
  return null;
}

export default function Board({ squares, xNext, onPlay }) {
  let status = "Next player: " + (xNext ? "X" : "O");
  let winner = calculateWinner(squares);
  if (winner) {
    status = "Winner: " + winner;
  }

  const handleClick = (index) => {
    if (winner || squares[index]) {
      return;
    }
    let newSquares = squares.slice();
    newSquares[index] = xNext ? "X" : "O";
    onPlay(newSquares);
  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <i>{status}</i>
      <br />
      <div>
        <div className="board-row">
          <Square name={0} value={squares[0]} onClick={() => handleClick(0)} />
          <Square name={1} value={squares[1]} onClick={() => handleClick(1)} />
          <Square name={2} value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square name="3" value={squares[3]} onClick={() => handleClick(3)} />
          <Square name="4" value={squares[4]} onClick={() => handleClick(4)} />
          <Square name="5" value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square name="6" value={squares[6]} onClick={() => handleClick(6)} />
          <Square name="7" value={squares[7]} onClick={() => handleClick(7)} />
          <Square name="8" value={squares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}
