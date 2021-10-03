import { useState } from 'react';
import { randomWord } from './words';

import './Hangman.css';

const Hangman = () => {
  const maxWrong = 5;
  const images = [
    'http://erencar.com.tr/0.svg',
    'http://erencar.com.tr/1.svg',
    'http://erencar.com.tr/2.svg',
    'http://erencar.com.tr/3.svg',
    'http://erencar.com.tr/4.svg',
    'http://erencar.com.tr/5.svg',
  ];

  const [nWrong, setNWrong] = useState(0);
  const [answer, setAnswer] = useState(randomWord());
  const [guessed, setGuessed] = useState('');
  console.log(answer);
  const resetGame = () => {
    setNWrong(0);
    setGuessed('');
    setAnswer(randomWord());
  };

  const guessedWord = () => {
    return answer.split('').map(ltr => (guessed.includes(ltr) ? ltr : '_'));
  };

  const handleGuess = evt => {
    let ltr = evt.target.value;
    setGuessed(guessed + ltr);
    setNWrong(nWrong + (answer.includes(ltr) ? 0 : 1));
  };

  const generateButtons = () => {
    return 'abcdefghijklmnopqrstuvwxyz'.split('').map((ltr, index) => (
      <button
        key={index}
        value={ltr}
        onClick={handleGuess}
        disabled={guessed.includes(ltr)}
      >
        {ltr}
      </button>
    ));
  };

  return (
    <div className="Hangman">
      <div className="left">
        <h1>Hangmen</h1>
        {answer === guessedWord().join('') ? (
          <>
            <p className="win"> YOU WIN!</p>
            <button id="reset" onClick={resetGame}>
              Play again
            </button>
          </>
        ) : nWrong === maxWrong ? (
          <div>
            <p className="lose">YOU LOSE</p>
            <p className="result">
              Correct word is "<span>{answer}</span>"
            </p>
            <button id="reset" onClick={resetGame}>
              Try again
            </button>
          </div>
        ) : (
          <div>
            <p className="Hangman-word">{guessedWord()}</p>
            <span className="Hangman-btns">{generateButtons()}</span>
          </div>
        )}

        <p className="wrong">
          {' '}
          Wrong : <span className="wr"> {nWrong}</span>
        </p>
      </div>
      <div className="right">
        <img src={images[nWrong]} alt="hang" />
      </div>
    </div>
  );
};

export default Hangman;
