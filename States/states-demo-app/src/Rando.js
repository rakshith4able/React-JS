import React, { Component } from 'react'

class Rando extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: null
        }
        this.makeTimer();
    }
    makeTimer() {
        setInterval(() => {
            let rand = Math.floor(Math.random() * this.props.maxNum);
            return this.setState({ num: rand });
        }, 1000);
    }



    render() {
        return (<div className="Rando">
            <h2>Random Number :{this.state.num}  </h2>
        </div>)
    }
}

export default Rando;