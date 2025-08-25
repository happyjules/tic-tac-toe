import { useState } from "react";
import Board from "./Board";

function Game() {
  let [history, setHistory] = useState([Array(9).fill(null)]);
  let [currentState, setCurrentState] = useState(0);

  const handlePlay = (squares) => {
    setHistory([...history, squares]);
    setCurrentState(currentState + 1);
  };

  function jumpTo(nextMove) {
    setHistory(history.slice(0, nextMove + 1));
    setCurrentState(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={history[currentState]}
          xNext={currentState % 2 === 0}
          onPlay={handlePlay}
        />
      </div>
      <div className="game-info">
        <div>{/* status*/}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
export default Game;
