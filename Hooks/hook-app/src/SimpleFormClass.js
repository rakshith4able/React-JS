import React, { Component } from 'react'

export default class SimpleFormClass extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }


    render() {
        return (
            <div>
                <form>
                    <h2>The content of form by class is {this.state.email}</h2>
                    <input
                        type='text'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}
