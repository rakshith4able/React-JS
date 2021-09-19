import React, { Component } from 'react'
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        dice: ['one', 'two', 'three', 'four', 'five', 'six']
    };

    constructor(props) {
        super(props);
        this.state = { num1: 'one', num2: 'one', rolling: false };
        this.roll = this.roll.bind(this);
    }

    roll() {
        const rand1 = this.props.dice[Math.floor(Math.random() * this.props.dice.length)];
        const rand2 = this.props.dice[Math.floor(Math.random() * this.props.dice.length)];
        this.setState({ num1: rand1, num2: rand2, rolling: true });
        setInterval(() => {
            this.setState({ rolling: false });
        }, 1000);
    }

    render() {
        return (<div className="RollDice">
            <div className="RollDice-container">
                <Die num={this.state.num1} rolling={this.state.rolling} />
                <Die num={this.state.num2} rolling={this.state.rolling} />
            </div>
            <button className="RollDice-button" onClick={this.roll} disabled={this.state.rolling && true}>
                {this.state.rolling ? 'Rolling' : 'Roll Dice'}
            </button>
        </div>);
    }
}

export default RollDice;