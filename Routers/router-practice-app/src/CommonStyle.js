import React, { Component } from 'react'
import './CommonStyle.css';

class CommonStyle extends Component {

    render() {
        return (
            <div className="CommonStyle">
                {this.props.children}
            </div>
        );
    }
}
export default CommonStyle;