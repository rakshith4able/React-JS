//Timer Component Demonstrates using componentDidMount() changing states
//ZenQuote Component Demonstrates using componentDidMount() fetching data from api
//GithubUserInfo Component Demonstrates using Async functions with componentDidMount()
//ZenQuote  Component again demonstrate the componentDidUpdate() method

import Timer from './Timer';
import './App.css';
import ZenQuote from './ZenQuote';
import GithubUserInfo from './GithubUserInfo';


function App() {
  return (
    <div className="App">
      {/* <Timer /> */}
      <ZenQuote />
      {/* <GithubUserInfo username="facebook" />
      <GithubUserInfo username="rakshith4able" /> */}
    </div>
  );
}

export default App;
