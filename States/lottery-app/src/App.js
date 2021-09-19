import Lottery from './Lottery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery title="Lotto" maxNum={40} numBalls={6} />
      <Lottery title="Mini Daily" maxNum={10} numBalls={4} />
    </div>
  );
}

export default App;
