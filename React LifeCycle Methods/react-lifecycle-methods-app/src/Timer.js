import React, { Component } from 'react'

class Timer extends Component {

    constructor(props) {
        console.log("Inside Constructor");
        super(props);
        this.state = { timer: new Date() };
    }

    //This executes after constructor and render and render is again called if we change state in componentDidMount()
    componentDidMount() {
        console.log("Inside componentDidMount()");
        this.timerId = setInterval(
            () => {
                this.setState({ timer: new Date() })
            }
            , 1000);
    }


    render() {
        console.log("Inside Render");
        return (<h1>
            {this.state.timer.getSeconds()}
        </h1 >
        );
    }
}
export default Timer;