import React, { Component } from 'react';
import LotteryBall from './LotteryBall';
import './Lottery.css';

class Lottery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nums: Array.from({ length: this.props.numBalls })
        };
        this.getRandom = this.getRandom.bind(this);
    }

    getRandom() {
        /* const maxNum = this.props.maxNum;
           const list = [];
          for (let i = 0; i < this.props.numBalls; i++) {
              let rand = Math.floor(Math.random() * maxNum) + 1;
              list.push(rand);
          }
          this.setState({ nums: list }); */
        this.setState((curState) => {
            return { nums: curState.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1) }
        });


    }

    render() {
        return (<div className="Lottery">
            <h2 className="Lottery-title">{this.props.title}</h2>
            <div className="Lottery-container">
                {this.state.nums.map((num) => {
                    return <LotteryBall num={num} />
                })}
            </div>
            <button className="Lottery-generate" onClick={this.getRandom}>Generate</button>

        </div>);
    }
}

export default Lottery;