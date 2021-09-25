import React, { Component } from 'react'
import './Box.css'
class Box extends Component {

    render() {

        const style = { width: `${this.props.width}em`, height: `${this.props.height}em`, backgroundColor: this.props.color };

        return (
            <div className="Box">
                <div style={style}></div>
                <button onClick={this.props.remove}>Remove Box</button>
            </div>
        );
    }

}

export default Box;