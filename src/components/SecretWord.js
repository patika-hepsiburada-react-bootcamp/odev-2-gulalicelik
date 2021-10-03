import { useState, useEffect } from 'react';
import '../App.css';

function SecretWord(props) {
  const [found, setFound] = useState('');
  console.log(props.word);
  const showChar = () => {
    console.log('buldun buldun');
  };

  useEffect(() => {
    console.log('---------->', found);
  }, [found]);
  return (
    <div>
      {props.word.split('').map(c => {
        return (
          <span className="under">
            <span className="nested" id="ch">
              {props.char === c && (props.char === c) != null
                ? c
                : console.log()}
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default SecretWord;
