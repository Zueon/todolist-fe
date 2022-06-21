import React from 'react';
import { useEffect, useState } from 'react';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import { call } from './services/ApiService';
import Header from './components/Header';
import Loader from './components/Loader';
const uuid = require('uuid');

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    call('/todo', 'GET', null).then((res) => {
      setItems(res.data.data);
      setIsLoading(false);
    });
  }, []);

  const add = (item) => {
    const id = uuid.v4();
    const newItem = { id, title: item, done: false };
    setItems(items.concat(newItem));
    call('/todo', 'POST', newItem).then((res) => {
      setItems(res.data.data);
    });
  };

  const deleteItem = (item) => {
    const itemId = { id: item };
    call('/todo', 'DELETE', itemId).then((res) => {
      setItems(res.data.data);
    });
  };

  const update = (item) => {
    console.log(item);
    call('/todo', 'PUT', item).then((res) => {
      setItems(res.data.data);
    });
  };

  const loader = <Loader />;
  let content = loader;

  const todoItems =
    items.length > 0 &&
    items.map((item, idx) => (
      <TodoItem
        item={item}
        key={item.id}
        deleteItem={deleteItem}
        update={update}
      />
    ));

  if (!isLoading) {
    content = (
      <div>
        <Header />
        <div className="todo-container">
          <AddTodo add={add} />
          <ul>{todoItems}</ul>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default App;
