import "./GameOver.css";

const GameOver = ({retry, score}) => {

  return (
    <>
    <div className="container">
      <h1>Fim de jogo!!!</h1>
      <p>Impressionante</p>
      <p> Sua pontuação foi: </p>
      <span className="points">{score}</span>
    </div>
    <button className="tryAgain" onClick={retry}>Tentar Novamente</button>
    </>
  )
}

export default GameOver;