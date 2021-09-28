import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

class URLParams extends Component {
    render() {
        const name = this.props.match.params.name;
        const url = `https://source.unsplash.com/1600x900/?${name}`;
        return (
            // Redirect based on parretn check whether name is no. or not
            /\d/.test(name) ? <Redirect path="/" /> :
                < div >
                    <h1>I like to have {name}</h1>
                    <img src={url} alt={name} />
                </div >
        )
    }
}

export default URLParams;