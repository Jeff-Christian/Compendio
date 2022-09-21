import "./Game.css";

const Game = ({verifyLetter}) => {
  return (
    <div>
      Game
      <button onClick={verifyLetter}>Finalizar Game</button>
    </div>
  )
}

export default Game;