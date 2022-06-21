import React from 'react';
import { useState } from 'react';

const AddTodo = (props) => {
  const [inputText, setInputText] = useState('');

  const { add } = props;

  const onInputChange = (e) => {
    setInputText(e.target.value);
  };

  const onButtonClick = () => {
    add(inputText);
    setInputText('');
  };

  const enterEvevtHandler = (e) => {
    if (e.key === 'Enter') {
      onButtonClick();
    }
  };

  return (
    <div className="form">
      <input
        type="text"
        value={inputText}
        onChange={onInputChange}
        onKeyDown={enterEvevtHandler}
      />
      <button onClick={onButtonClick}>
        <span
          style={{
            padding: '0.3rem',
            borderRadius: '5px',
            border: 'solid',
            backgroundColor: 'ButtonFace',
          }}
        >
          ADD
        </span>
      </button>
    </div>
  );
};

export default AddTodo;
