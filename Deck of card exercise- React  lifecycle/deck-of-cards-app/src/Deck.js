import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';

const BASE_URL = "https://www.deckofcardsapi.com/api/deck/";

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: null,
            drawn: [],
        };
        this.getCard = this.getCard.bind(this);
    }

    async componentDidMount() {
        const res = await axios.get(`${BASE_URL}new/shuffle/`);
        this.setState({ deck: res.data });
    }

    async getCard() {
        const id = this.state.deck.deck_id;
        const drawnCard = await (axios.get(`${BASE_URL}${id}/draw/`));
        console.log(drawnCard.data.cards[0]);
        this.setState((st) => {
            return {
                drawn: [...st.drawn, {
                    name: `${drawnCard.data.cards[0].value} of ${drawnCard.data.cards[0].suit}`,
                    image: drawnCard.data.cards[0].image
                }]
            }
        });

    }
    render() {
        return (
            <div className="Deck">
                <h1>Deck</h1>
                <button onClick={this.getCard}>Get Card</button>
                <div>
                    {this.state.drawn.map((card) => {
                        return <Card src={card.image} alt={card.name} key={card.name0} />
                    })}
                </div>
            </div>);
    }
}

export default Deck;