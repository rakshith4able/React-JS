import React, { Component } from 'react'

class URLParams extends Component {
    render() {
        const name = this.props.match.params.name;
        const url = `https://source.unsplash.com/1600x900/?${name}`;
        return (
            <div>
                <h1>I like to have {name}</h1>
                <img src={url} alt={name} />
            </div>
        )
    }
}

export default URLParams;