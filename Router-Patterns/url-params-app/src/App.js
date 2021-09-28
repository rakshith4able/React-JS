import './App.css';
import { Route, Switch } from 'react-router';
import URLParams from './URLParams';
import MultipleParams from './MultipleParams';
import SearchForm from './SearchForm';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        {/* -By default when we specify component/ render in router a parameter is sent
            -Which is an object consisting of properties like history,location and match
            -match itself is an object consists of properties params
        */}
        {/* we use render in Route and pass  a call back that returns component with props */}
        <Route exact path="/food/:name" render={
          (params) => {
            console.log(params);
            return <URLParams {...params} />
          }
        } />

        {/*- Here when we do not need to pass extra props we can make use of component instead of render.
        - Then automatically the params are sent as props to the component by react
       */}
        <Route exact path="/food/:food/drink/:drink" component={MultipleParams} />


        <Route exact path="/" component={SearchForm} />

        {/* Adding 404 Not FOund */}
        <Route render={() => (<h1>404 Not Found</h1>)} />
      </Switch>
    </div>
  );
}

export default App;
