import React, { Component } from 'react';

class Random extends Component {
    constructor(props) {
        super(props);
        this.state = { num: 1 }

        this.getRandom = this.getRandom.bind(this);
    }

    getRandom() {
        let randNum = Math.floor(Math.random() * 10 + 1);
        this.setState({ num: randNum });
    }
    render() {
        let component;
        if (this.state.num === 7) {
            component = <h2>Winner! </h2>;
        }
        else {
            component = <button onClick={this.getRandom}>Random Number</button>;
        }

        return (<div className="Random">
            <h1>{`This Number is ${this.state.num}`}</h1>
            {component}

        </div>);
    }

}

export default Random;