import "./GameOver.css";

import { useState } from "react";

const GameOver = ({retry, score}) => {

  const levels = [
    {id: 1, name: 'tryAgain'},
    {id: 2, name: 'veryWeel'},
    {id: 3, name: 'Excellent'}
  ];

  const [scoreLevels, setScoreLevels] = useState(levels[0].name);


  return (
    <>
    <div className="container">
      <h1>Fim de jogo!!!</h1>
      {scoreLevels === 'tryAgain' && <p>Que pena, tente de novo!</p>}
      {scoreLevels === 'veryWeel' && <p>IMPRESSIONANTE, você arrasa!</p>}
      {scoreLevels === 'Excellent' && <p>Excelente, meus parabéns!</p>}
      <p> Sua pontuação foi: </p>
      <span className="points">{score}</span>
    </div>
    <button className="tryAgain" onClick={retry}>Tentar Novamente</button>
    </>
  )
}

export default GameOver;