import React, { Component } from 'react'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 99,
            isGameOver: false
        }
    }

    render() {
        return (<div className="Game">
            <h1>Score is {this.state.score}</h1>
        </div>)
    }
}

export default Game;