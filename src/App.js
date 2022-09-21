// Components
import './App.css';
import Loading from "./components/Loading";
import Game from './components/Game';
import GameOver from './components/GameOver';

// CSS
import "./App.css";

// Hooks, React
import { useCallback, useEffect, useState } from "react";

// Data
import { wordsList } from "./data/words";

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}
];

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);

  const [words] = useState(wordsList);

  // method of play game
  const startGame = () => {
    setGameStage(stages[1].name);
  }

  // method process each letter
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  // restart the game
  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <>
    {gameStage === 'start' && <Loading startGame={startGame} />}
    {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
    {gameStage === 'end' && <GameOver retry={retry} />}
    </>
  );
}

export default App;
