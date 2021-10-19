import './App.css';
import { SelectCharacter } from './SelectCharacter'
import { ListCharacter } from './ListCharacter'

function App() {
  return (
    <div className="App">
      <h1>Select Rick&Morty's characters by episode</h1>
      <SelectCharacter />
      {/* <ListCharacter/> */}
    </div>
  );
}

export default App;
