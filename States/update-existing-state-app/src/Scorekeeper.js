import React, { Component } from 'react'

class Scorekeeper extends Component {
    constructor(props) {
        super(props);
        this.state = { score: 0 };
        this.increase1 = this.increase1.bind(this);
        this.increase3 = this.increase3.bind(this);
    }

    increase1() {

        // this.setState({ score: this.state.score + 1 }); This should be avoided

        //instead use callbacks
        this.setState((curState) => {
            return { score: curState.score + 1 }
        });
    }


    increase3() {

        /* 
        //These 3 lines are similar so only the last one works so score will increase by 1
        this.setState({ score: this.state.score + 1 });
        this.setState({ score: this.state.score + 1 });
        this.setState({ score: this.state.score + 1 }); 
        */

        this.setState((curState) => {
            return { score: curState.score + 1 }
        });

        this.setState((curState) => {
            return { score: curState.score + 1 }
        });

        this.setState((curState) => {
            return { score: curState.score + 1 }
        });


    }

    render() {
        return (<div>
            <h1>The Score is: {this.state.score}</h1>
            <button onClick={this.increase1}>Increase Score By 1 </button>
            <button onClick={this.increase3}>Increase Score By 3 </button>
        </div >);
    }
}

export default Scorekeeper;