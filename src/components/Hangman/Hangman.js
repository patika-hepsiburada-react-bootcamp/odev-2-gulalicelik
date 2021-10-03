import { useState } from 'react';
import { randomWord } from './words';

import './Hangman.css';

const Hangman = () => {
  const maxWrong = 5;
  const images = [
    'http://erencar.com.tr/0.png',
    'http://erencar.com.tr/1.png',
    'http://erencar.com.tr/2.png',
    'http://erencar.com.tr/3.png',
    'http://erencar.com.tr/4.png',
    'http://erencar.com.tr/5.png',
  ];

  const [nWrong, setNWrong] = useState(0);
  const [answer, setAnswer] = useState(randomWord());
  const [guessed, setGuessed] = useState(new Set());

  const resetGame = () => {
    setNWrong(0);
    setGuessed(new Set());
    setAnswer(randomWord());
  };

  const guessedWord = () => {
    return answer.split('').map(ltr => (guessed.has(ltr) ? ltr : '_'));
  };

  const handleGuess = evt => {
    let ltr = evt.target.value;

    setGuessed(guessed.add(ltr));

    setNWrong(nWrong + (answer.includes(ltr) ? 0 : 1));
  };

  const generateButtons = () => {
    return 'abcdefghijklmnopqrstuvwxyz'.split('').map((ltr, index) => (
      <button
        key={index}
        value={ltr}
        onClick={handleGuess}
        disabled={guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  };

  return (
    <div className="Hangman">
      <div className="left">
        <h1>Adam Asmaca</h1>
        {answer === guessedWord().join('') ? (
          <p>Kazandın !</p>
        ) : nWrong === maxWrong ? (
          <div>
            <p>Kaybettin </p>
            <p>Doğru Kelime: {answer}</p>
          </div>
        ) : (
          <div>
            <p className="Hangman-word">{guessedWord()}</p>
            <span className="Hangman-btns">{generateButtons()}</span>
          </div>
        )}

        <button id="reset" onClick={resetGame}>
          Tekrar
        </button>

        <p className="wrong">Yanlış: {nWrong}</p>
      </div>
      <div className="right">
        <img src={images[nWrong]} alt="hang" />
      </div>
    </div>
  );
};

export default Hangman;
