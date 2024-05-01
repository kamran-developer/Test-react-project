const GameBord = ({ gameBoard, handleSelectSquare }) => {
  return (
    <ul className="flex flex-col gap-5">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ul className="flex gap-5">
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => handleSelectSquare(rowIndex, colIndex)}
                  className="bg-slate-600 w-20 h-20"
                  disabled={col && "disabled"}
                >
                  {col}
                </button>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default GameBord;
