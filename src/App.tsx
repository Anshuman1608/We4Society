import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from './components/utils/header';

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
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/employee">Employee</Link></li>
              <li><Link to="/customer">Customer</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Header />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
