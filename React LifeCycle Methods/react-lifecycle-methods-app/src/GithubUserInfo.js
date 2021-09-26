import axios from 'axios';
import React, { Component } from 'react';

class GithubUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            src: ""
        };
    }

    async componentDidMount() {
        const response = await axios.get(`https://api.github.com/users/${this.props.username}`);
        console.log(response);
        this.setState({ name: response.data.name, src: response.data.avatar_url })
    }

    render() {
        return (<div>
            <h2>Github User: {this.state.name}</h2>
            <img src={this.state.src} />
        </div>)
    }

}

export default GithubUserInfo;