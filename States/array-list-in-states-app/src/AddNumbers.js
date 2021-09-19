import React, { Component } from 'react'

class AddNumbers extends Component {
    static defaultProps = {
        numbers: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eigth', 'nine', 'ten']
    };

    constructor(props) {
        super(props);
        this.state = {
            nums: []
        };
        this.addNum = this.addNum.bind(this);
    }

    addNum() {
        let randIdx = Math.floor(Math.random() * this.props.numbers.length);
        let newNumber = this.props.numbers[randIdx];
        this.setState({ nums: [...this.state.nums, newNumber] });


    }

    render() {

        const numbers = this.state.nums.map((num) => (<span> {num} </span>));

        return (
            <div>
                <h1>Add Numbers</h1>
                {numbers}
                <br />
                <button onClick={this.addNum} >Add Numbers</button>
            </div>);
    }
}

export default AddNumbers;