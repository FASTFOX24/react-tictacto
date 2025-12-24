import Square from "./components/Square";
import { calculateWinner } from "./utils/winner-calculate";

function App({ xIsNext, currentSquares, onPlay }) {
  const handleClick = (i) => {
    if (currentSquares[i] || calculateWinner(currentSquares)) return;
    const nextSquares = currentSquares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  };

  const winner = calculateWinner(currentSquares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const squares = Array.from({ length: 3 }).map((_, idx_1) => (
    <div key={idx_1} className="board-row">
      {Array.from({ length: 3 }).map((_, idx_2) => (
        <Square
          key={idx_1 * 3 + idx_2}
          value={currentSquares[idx_1 * 3 + idx_2]}
          onSquareClick={() => handleClick(idx_1 * 3 + idx_2)}
        />
      ))}
    </div>
  ));

  return (
    <>
      <div className="status">{status}</div>
      {squares}
    </>
  );
}

export default App;
