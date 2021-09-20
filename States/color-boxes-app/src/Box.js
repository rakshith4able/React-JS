import React, { Component } from 'react';
import { choice } from './Helpers';
import './Box.css';
class Box extends Component {
    static defaultProps = {
        Colors: ["purple", "magenta", "lilac", "pink"]
    };

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { color: choice(this.props.Colors) }
    }

    change() {
        let newColor;
        do {
            newColor = choice(this.props.Colors);
        } while (newColor === this.state.color);
        this.setState(st => {
            return { color: newColor }
        });
    }

    handleClick(e) {
        this.change();
    }
    render() {
        return (
            <div className="Box" style={{ backgroundColor: this.state.color }} onClick={this.handleClick}>

            </div>
        );
    }
}

export default Box;