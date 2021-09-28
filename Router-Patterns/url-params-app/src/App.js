import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import URLParams from './URLParams';
import MultipleParams from './MultipleParams';

function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path="/food/:name" render={
          (params) => {
            console.log(params);
            return <URLParams {...params} />
          }
        } />

        <Route exact path="/food/:food/drink/:drink" component={MultipleParams} />

        <Route exact path="/" render={() => (<h1>This is homepage</h1>)} />

        {/* Adding 404 Not FOund */}
        <Route render={() => (<h1>404 Not Found</h1>)} />
      </Switch>
    </div>
  );
}

export default App;
