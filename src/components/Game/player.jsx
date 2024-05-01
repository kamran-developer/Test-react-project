import { useState } from "react";

const Player = ({ name, symbol, activePlayer }) => {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  let editablePlayerName = <p className="w-28"> {playerName} </p>;

  const activeEditing = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange = (evnet) => {
    setPlayerName(evnet.target.value);
  };

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        className="bg-slate-800 w-28"
        value={playerName}
        onChange={handleChange}
        required
      />
    );
  }

  console.log(activePlayer);
  console.log(symbol);

  return (
    <div
      className={
        activePlayer == symbol
          ? "flex gap-4 p-4 border border-slate-500"
          : "flex gap-4 p-4 "
      }
    >
      {editablePlayerName}
      <button onClick={activeEditing}>{isEditing ? "Save" : "Edit"}</button>
      <p>{symbol}</p>
    </div>
  );
};

export default Player;
