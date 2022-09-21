import "./GameOver.css";

const GameOver = ({retry}) => {
  return (
    <div>
      GameOver
      <button onClick={retry}>Restart the Game</button>
    </div>
  )
}

export default GameOver;