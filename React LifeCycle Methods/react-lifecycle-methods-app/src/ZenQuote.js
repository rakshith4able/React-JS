import React, { Component } from 'react'
import axios from 'axios';
class ZenQuote extends Component {
    constructor(props) {
        console.log("Inside Constructor");
        super(props);
        this.state = { quote: "" };
    }

    componentDidMount() {
        console.log("Inside componentDidMount()");
        const url = `https://api.github.com/zen`;
        axios.get(url).then((response) => {
            setTimeout(() => { this.setState({ quote: response.data }) }, 3000)

        });
    }

    // componentDidUpdate without any parameters
    // componentDidUpdate() {
    //     console.log("Inside componentDidUpdate()");
    // }

    componentDidUpdate(oldProps, oldStates) {
        //Since there are no props we cant demonstrate here
        // console.log("Inside componentDidUpdate()");
        // console.log(`old properties=${oldProps}`);
        console.log(`old states=${oldStates.quote}`);
        console.log(`New states=${this.state.quote}`);
    }

    render() {
        console.log("Inside render()");
        return (<div>
            <h1>This is the ZenQuote:</h1>
            <p>{this.state.quote}</p>
        </div>);
    }
}

export default ZenQuote;