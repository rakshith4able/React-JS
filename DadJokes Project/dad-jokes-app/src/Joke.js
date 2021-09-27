import React, { Component } from 'react';
import './Joke.css';

class Joke extends Component {

    constructor(props) {
        super(props);
        this.upVote = this.upVote.bind(this);
        this.downVote = this.downVote.bind(this);
    }

    upVote() {
        this.props.handleVotes(this.props.id, 1);
    }

    downVote() {
        this.props.handleVotes(this.props.id, -1);
    }




    render() {
        return (
            <div className="Joke">
                <div className="Joke-buttons">
                    <i className="fas fa-arrow-up" onClick={this.upVote}></i>
                    <span className="Joke-votes">{this.props.votes} </span>
                    <i className="fas fa-arrow-down" onClick={this.downVote}></i>
                </div>
                <div className="Joke-text">{this.props.joke}</div>
            </div>
        );
    }

}

export default Joke;