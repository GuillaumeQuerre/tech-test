import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SelectCharacter } from './SelectCharacter'
import { ListCharacter } from './ListCharacter'

function App() {
  return (
    <div className="App">
      <SelectCharacter />
      <ListCharacter />
    </div>
  );
}

export default App;
