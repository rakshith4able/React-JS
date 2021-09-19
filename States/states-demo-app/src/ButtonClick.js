import React, { Component } from 'react'

class ButtonClick extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
        this.makeClick = this.makeClick.bind(this); //Here we are using bind to say that this.makeCLick should be this for each instances
    }

    makeClick(e) {
        this.setState({ clicked: true });
    }

    render() {
        return (<div className="ButtonClick">
            <h2>{this.state.clicked ? 'Clicked' : 'Not Clicked'} </h2>
            <button onClick={this.makeClick}>Click Me</button>
        </div>);
    }
}

export default ButtonClick;