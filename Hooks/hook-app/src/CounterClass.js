import react, { Component } from 'react';

class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return (<div className="CounterClass">
            <h2>Counter Class Component</h2>
            <h3>Count is {this.state.count}</h3>
            <button onClick={this.increment}>Increment</button>
        </div>);
    }
}

export default CounterClass;