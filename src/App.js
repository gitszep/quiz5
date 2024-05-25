import React from 'react';
import Quiz from './components/Quiz';
import './App.css';
import derekImage from './derek.jpg'; // Importujemy obraz


function App() {
  return (
    <div className="App">
      <header className="App-header">
    <img src={derekImage} alt="Derek" /> 
      <p>Uratuj mnie !</p>

        <Quiz />
      </header>
    </div>
  );
}

export default App;
