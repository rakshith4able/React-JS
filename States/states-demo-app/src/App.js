import Game from './Game';
import Rando from './Rando';
import './App.css';

function App() {
  return (
    <div className="App">
      <Game />
      <Rando maxNum="10" />
    </div>
  );
}

export default App;
