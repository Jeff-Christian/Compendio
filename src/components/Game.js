import "./Game.css";

import Compendio from "../img/compendio-logo.png";
import CompendioWord from "../img/compendio-word.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';


import { useState } from "react";

const Game = ({verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score}) => {

  const [showTip, setShowTip] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showScore, setShowScore] = useState(false);

  return (
    <>
    <nav className="navbar">
      <ul>
        <li className="help-btn" onClick={ () => setShowTip(!showTip)}><FontAwesomeIcon icon={faLightbulb} /></li>
        <li className="help-btn" onClick={ () => setShowHelp(!showHelp)}><FontAwesomeIcon icon={faQuestion} /></li>
        <li id="logo-center"><img src={Compendio} alt="Logo do game" /></li>
        <li className="score-btn" onClick={ () => setShowScore(!showScore)}><FontAwesomeIcon icon={faGift} /></li>
      </ul>
    </nav>

    {showTip &&  
      <div id="box-tip">
        <p>Sua palavra se refere A: </p>
        <span>{pickedCategory}</span>
      </div>
    }

    {showHelp &&  
      <div id="box-help">
        <p>
          Descubra a palavra certa em até 6 tentativas. Depois de cada letra chutada, as peças revelam o quão perto você está de acertar.
        </p>
        <img src={CompendioWord} alt="Palavra sendo Completada" />
        <p>Os acentos são preenchidos automaticamente, e não são considerados nas dicas</p>
        <p>As palavras podem possuir letras repetidas.</p>
      </div>
    }

    {showScore &&  
      <div id="box-score">
        <p>Sua pontuação:</p>
        <span>{score}</span>
      </div>
    }

    <p>Restam {guesses} tentativas</p>

    <div className="words">
      {letters.map((letter, i) =>
        guessedLetters.includes(letter) ? (
          <span key={i} className="letter">
            {letter}
          </span>
        ) : (
          <span key={i} className="blankSquare"></span>
        )
      )}
    </div>

    <div className="lastWords">
      <p>Suas últimas tentativas:</p>
      {wrongLetters.map((letter, i) => (
        <span key={i}>{letter},</span>
      ))}
    </div>

    <div>
      <input type="text" maxLength={1} placeholder="Digite uma letra" />
      <button>Enter</button>
    </div>

    </>
  )
}

export default Game;