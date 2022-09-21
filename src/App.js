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

  // Choose a category and word at Data
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordandCategory = () => {
    // pick a random category
    const categories = Object.keys(words);
    const category = categories[
      Math.floor( Math.random() * Object.keys(categories).length
    )];

    // pick a random word
    const word = words[category][
      Math.floor( Math.random() * words[category].length
    )];

    return {category, word};

  }

  // method of play game
  const startGame = () => {
  
    // pick word and category
    const {category, word} = pickWordandCategory();

    // create an array of letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(category, word);
    console.log(wordLetters);

    // fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);

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
