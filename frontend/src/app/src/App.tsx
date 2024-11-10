import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Page1 />} />
        <Route path='/about' element={<Page2 />} />
      </Routes>
    </div>
  );
}



function Test() {
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

export default App;
