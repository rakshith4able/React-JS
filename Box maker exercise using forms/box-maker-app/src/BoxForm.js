import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';
class BoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '',
            height: '',
            color: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(evt) {
        evt.preventDefault();
        this.props.create({ ...this.state, id: uuid() });
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='width'>Width</label>
                <input type='number' name='width' id='width' onChange={this.handleChange} value={this.state.width} />
                <label htmlFor='height'>height</label>
                <input type='number' name='height' id='height' onChange={this.handleChange} value={this.state.height} />
                <label htmlFor='color'>color</label>
                <input type='text' name='color' id='color' onChange={this.handleChange} value={this.state.color} />
                <button>Create Box</button>
            </form>
        );
    }
}

export default BoxForm;