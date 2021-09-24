import React, { Component } from 'react'

class MultipleFormInputs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render() {
        return (<div className="MultipleFormInputs">
            <h2>Multiple Inputs in Forms</h2>
            <form>
                <input type="text" value={this.state.username} name="username" onChange={this.handleChange} />
                <input type="text" value={this.state.email} name="email" onChange={this.handleChange} placeholder="email" />
                <input type="password" value={this.state.password} name="password" onChange={this.handleChange} placeholder="password" />
                <button>Submit</button>
            </form>
        </div>);
    }
}

export default MultipleFormInputs;