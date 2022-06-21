import React from 'react';
import { useState } from 'react';

const TodoItem = (props) => {
  const [item, setItem] = useState(props.item);

  const [readOnly, setReadOnly] = useState(true);

  const { deleteItem, update } = props;
  const deleteHandler = () => {
    deleteItem(item.id);
  };

  const offReadOnlyMode = () => {
    console.log('Event!', readOnly);
    setReadOnly(false);
  };

  const enterKeyEventHandler = (e) => {
    if (e.key === 'Enter') {
      setReadOnly(true);
      update(item);
    }
  };

  const editEventHandler = (e) => {
    setItem({ ...item, title: e.target.value });
  };

  const checkboxEventHandler = (e) => {
    item.done = e.target.checked;
    setItem(item);
    update(item);
  };

  return (
    <div className="item">
      <input
        type="checkbox"
        name={item.id}
        id={item.id}
        checked={item.done}
        onChange={checkboxEventHandler}
        style={{ marginRight: '5px' }}
      />
      <input
        value={item.title}
        className="item-text"
        id={item.id}
        name={item.id}
        onClick={offReadOnlyMode}
        onChange={editEventHandler}
        onKeyPress={enterKeyEventHandler}
        readOnly={readOnly}
      />

      <button onClick={deleteHandler}>
        <span className="material-icons">highlight_off</span>
      </button>
    </div>
  );
};

export default TodoItem;
