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

  console.log(words);

  return (
    <>
    {gameStage === 'start' && <Loading />}
    {gameStage === 'game' && <Game />}
    {gameStage === 'end' && <GameOver />}
    </>
  );
}

export default App;
