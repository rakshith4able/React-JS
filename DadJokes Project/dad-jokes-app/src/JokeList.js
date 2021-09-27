import React, { Component } from 'react';
import axios from 'axios';
import './JokeList.css';
import Joke from './Joke';
import { v4 as uuid } from 'uuid';
class JokeList extends Component {
    static defaultProps = {
        numJokes: 10
    };

    constructor(props) {
        super(props);
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem('jokes')) || []
        };
        this.handleVotes = this.handleVotes.bind(this);
        this.getJokes = this.getJokes.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (this.state.jokes.length === 0) this.getJokes();
    }

    async getJokes() {
        const jokes = [];
        while (jokes.length < this.props.numJokes) {
            const res = await axios.get('https://icanhazdadjoke.com/', { headers: { accept: 'application/json' } });
            jokes.push({ joke: res.data.joke, votes: 0, id: uuid() });
        }
        this.setState({ jokes: jokes });
        window.localStorage.setItem("jokes", JSON.stringify(jokes));
    }

    handleVotes(id, delta) {

        this.setState(st => ({
            jokes: st.jokes.map(j =>
                j.id === id ? { ...j, votes: j.votes + delta } : j)
        }),
            () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
        );

    }


    handleClick() {
        this.getJokes();
    }

    render() {
        return (
            <div className="JokeList" >
                <div className="JokeList-sidebar">
                    <h1 className="JokeList-title">Dad Jokes</h1>
                    <img src="https://img.icons8.com/emoji/50/000000/rolling-on-the-floor-laughing.png" />
                    <button onClick={this.handleClick()}>Add Jokes</button>
                </div>

                <div className="JokeList-jokes">

                    {this.state.jokes.map(
                        (j) => {
                            return <Joke votes={j.votes} joke={j.joke} id={j.id} key={j.id} handleVotes={this.handleVotes} />
                        })}
                </div>
            </div>);
    }

}

export default JokeList;