import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

// ref
//https://zenn.dev/sprout2000/articles/40328708afaeb9#main.tsx

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

/*
function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const result = await axios.get('http://localhost:5005/')
    setData(result.data);
  };

  return (
    <div className="App">
      <h1>React Sample</h1>
      <button onClick={fetchData}>Push</button>
      <p>{data}</p>
    </div>
  );
}
*/

type Todo = {
  value: string;
  readonly id: number;
}

function App() {
  const [text, setText] = useState('');

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = () => {
    if (!text) return;

    const newTodo: Todo = {
      value: text,
      id: new Date().getTime(),
    };

    setTodos((todos) => [newTodo, ...todos]);
    setText('')
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const handleEdit = (id: number, value: string) => {
    setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.value = value;
        }
        return todo;
      });
      return newTodos;
    })
  }
  

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();}
        }
        >
        <input
          type="text"
          value={text}
          onChange={(e) => handleChange(e)}
        />
        <input type="submit" value="追加" onSubmit={handleSubmit}/>
      </form>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>
            <input
              type="text"
              value={todo.value}
              onChange={(e) => handleEdit(todo.id, e.target.value)}
            />
          </li>;
        })}
      </ul>
    </div>
  );
};


export default App;
