import React, { Component } from 'react';
import './Coin.css';
class Coin extends Component {
    render() {
        return (
            <div className="Coin">
                <img className="Coin-img" src={this.props.info.url} />
            </div>);
    }
}

export default Coin;