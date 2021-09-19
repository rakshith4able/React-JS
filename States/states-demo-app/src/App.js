import Game from './Game';
import Rando from './Rando';
import ButtonClick from './ButtonClick';
import './App.css';

function App() {
  return (
    <div className="App">
      <Game />
      <Rando maxNum="10" />
      <ButtonClick />
    </div>
  );
}

export default App;
