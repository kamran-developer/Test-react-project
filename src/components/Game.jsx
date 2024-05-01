import { useState } from "react";
import GameBord from "./Game/GameBoard";
import SectionContent from "./Sections/SectionContent";
import Player from "./Game/player";

const initialGameBord = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const Game = () => {
  // const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameBord, setGameBord] = useState(initialGameBord);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameBord((prevGameBord)=>{
      const updateBord = [...prevGameBord.map(innerArray => [...innerArray ])];
      updateBord[rowIndex][colIndex] = activePlayer;
      return updateBord;
    })
    handleActivePlayer();
  };

  function handleActivePlayer() {
    setActivePlayer((activePlayer)=>{
      return activePlayer == "X" ? "O" : "X";
    })
  }

  return (
    <SectionContent title="Game" className="max-w-2xl">
      <div className="text-white">
        <div className="flex gap-10 pb-10">
          <Player name="Player 1" symbol="O" activePlayer={activePlayer} />
          <Player name="Player 2" symbol="X" activePlayer={activePlayer} />
        </div>

        <GameBord
          gameBoard={gameBord}
          handleSelectSquare={handleSelectSquare}
        />
      </div>
    </SectionContent>
  );
};

export default Game;
