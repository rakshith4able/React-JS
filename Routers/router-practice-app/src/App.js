import './App.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>

    </div>
  );
}

export default App;
