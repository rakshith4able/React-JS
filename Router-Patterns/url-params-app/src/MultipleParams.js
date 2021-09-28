import React, { Component } from 'react'

class MultipleParams extends Component {
    render() {

        const food = this.props.match.params.food;
        const drink = this.props.match.params.drink;
        const urlfood = `https://source.unsplash.com/1600x900/?${food}`;
        const urldrink = `https://source.unsplash.com/1600x900/?${drink}`;

        return (
            <div>
                <h1>I like to have {food} with {drink}</h1>
                <img src={urlfood} alt={food} />
                <img src={urldrink} alt={drink} />
            </div>
        )
    }
}

export default MultipleParams;
