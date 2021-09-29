import React, { Component } from 'react';
import DogList from './DogList';
import './App.css';
import whiskey from './imgs/whiskey.jpg'
import tubby from './imgs/tubby.jpg'
import hazel from './imgs/hazel.jpg'
import { Route, Switch } from 'react-router';
import DogDetails from './DogDetails';
import Navbar from './Navbar';


class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  };


  render() {

    const dogDetails = (props) => {
      const name = props.match.params.name;
      const dog = this.props.dogs.find((dog) => { return dog.name === name });
      return <DogDetails dog={dog} {...props} />

    };

    return (
      <div className="App">
        <Navbar dogs={this.props.dogs} />
        <Switch>
          <Route exact path="/dogs" render={() => (<DogList dogs={this.props.dogs} />)} />
          <Route exact path="/dogs/:name" render={dogDetails} />
        </Switch>
      </div>
    )
  }
}

export default App;




