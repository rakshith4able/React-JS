import React, { Component } from 'react';
import './Pokecard.css'


let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
class Pokecard extends Component {

    render() {
        const BASE_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
        return (<div className="Pokecard">
            <h1 className="Pokecard-title">{this.props.name}</h1>
            <img src={`${BASE_URL}${padToThree(this.props.id)}.png`} alt={this.props.name} />
            <div className="Pokecard-data">Type: {this.props.type}</div>
            <div className="Pokecard-data">Exp: {this.props.exp}</div>
        </div>);

    }
}

export default Pokecard;