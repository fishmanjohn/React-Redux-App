import React from 'react';
import './App.css';


//components
import CharacterList from './components/CharacterList'

function App() {
  const placeHolder='plsceholder'
  return (
    <div className="App">
      <header className="App-header">
        <h1>Breaking Bad Characters!</h1>
        <CharacterList props ={placeHolder}/>
      </header>
    </div>
  );
}

export default App;
