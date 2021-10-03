import React from 'react';
import '../App.css';
function Keyboard(props) {
  return (
    <div className="container">
      <div className="row">
        {' '}
        <button onClick={() => props.selectChar('A')} className="btn">
          A
        </button>
        <button onClick={() => props.selectChar('B')} className="btn">
          B
        </button>
        <button onClick={() => props.selectChar('C')} className="btn">
          C
        </button>
        <button onClick={() => props.selectChar('D')} className="btn">
          D
        </button>
        <button onClick={() => props.selectChar('E')} className="btn">
          E
        </button>
        <button onClick={() => props.selectChar('F')} className="btn">
          F
        </button>
      </div>
      <div className="row">
        {' '}
        <button onClick={() => props.selectChar('G')} className="btn">
          G
        </button>
        <button onClick={() => props.selectChar('H')} className="btn">
          H
        </button>
        <button onClick={() => props.selectChar('I')} className="btn">
          I
        </button>
        <button onClick={() => props.selectChar('J')} className="btn">
          J
        </button>
        <button onClick={() => props.selectChar('K')} className="btn">
          K
        </button>
        <button onClick={() => props.selectChar('L')} className="btn">
          L
        </button>
      </div>
      <div className="row">
        <button onClick={() => props.selectChar('M')} className="btn">
          M
        </button>
        <button onClick={() => props.selectChar('N')} className="btn">
          N
        </button>
        <button onClick={() => props.selectChar('O')} className="btn">
          O
        </button>
        <button onClick={() => props.selectChar('P')} className="btn">
          P
        </button>
        <button onClick={() => props.selectChar('Q')} className="btn">
          Q
        </button>
        <button onClick={() => props.selectChar('R')} className="btn">
          R
        </button>
      </div>
      <div className="row">
        {' '}
        <button onClick={() => props.selectChar('S')} className="btn">
          S
        </button>
        <button onClick={() => props.selectChar('T')} className="btn">
          T
        </button>
        <button onClick={() => props.selectChar('U')} className="btn">
          U
        </button>
        <button onClick={() => props.selectChar('V')} className="btn">
          V
        </button>
        <button onClick={() => props.selectChar('W')} className="btn">
          W
        </button>
        <button onClick={() => props.selectChar('X')} className="btn">
          X
        </button>
      </div>
      <div className="row bottomrow">
        <button onClick={() => props.selectChar('Y')} className="btn">
          Y
        </button>
        <button onClick={() => props.selectChar('Z')} className="btn">
          Z
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
