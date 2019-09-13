import React from 'react';
import { Route, Link } from 'react-router';
import HelloWorld from './components/HelloWorld'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Route path="/" component={HelloWorld}/>
      </header>
    </div>
  );
}

export default App;
