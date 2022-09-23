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

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(6);
  const [score, setScore] = useState(0);


  const pickWordandCategory = useCallback(() => {
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

  }, [words]);

  // method of play game
  const startGame = useCallback(() => {

    // clear all letters
    clearLetterStates();

  
    // pick word and category
    const {category, word} = pickWordandCategory();

    // create an array of letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    // fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordandCategory]);

  // method process each letter
  const verifyLetter = (letter) => {
    const lowerLetter = letter.toLowerCase();

    // check if letter has already been utilized
    if (
      guessedLetters.includes(lowerLetter) || 
      wrongLetters.includes(lowerLetter)
    ) {
      return
    }

    // push guessed letter or remove a guess
    if (letters.includes(lowerLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        lowerLetter
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        lowerLetter
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }

  }

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  // Check if guesses ended
  useEffect(() => {

    if (guesses <= 0) {
      // reset all stages
      clearLetterStates();

      setGameStage(stages[2].name);
    }

  }, [guesses]);

  // check win condition
  useEffect(() => {

    // check if has repeat letters
    const uniqueLetters = [...new Set(letters)];

    // win condition
    if (guessedLetters.length === uniqueLetters.length) {
      
      // add score
      setScore((actualScore) => actualScore += 100);

      // restart game with new word
      startGame();

    }

  }, [guessedLetters, letters, startGame]);

  // restart the game
  const retry = () => {

    setScore(0);
    setGuesses(6);
    setGameStage(stages[0].name);
  }

  return (
    <>
    {gameStage === 'start' && 
    <Loading 
    startGame={startGame} 
    />}

    {gameStage === 'game' && (
    <Game 
    verifyLetter={verifyLetter} 
    pickedWord={pickedWord}
    pickedCategory={pickedCategory}
    letters={letters}
    guessedLetters={guessedLetters}
    wrongLetters={wrongLetters}
    guesses={guesses}
    score={score}
    />
    )}

    {gameStage === 'end' && 
    <GameOver 
    retry={retry} 
    score={score}
    />}
    </>
  );
}

export default App;
