import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';
class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.add({ ...this.state, id: uuid() });
        this.setState({ task: "" });
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    render() {
        return (<form onSubmit={this.handleSubmit}>
            <label htmlFor="task">Enter the task:</label>
            <input type="text" name="task" value={this.state.task} onChange={this.handleChange} />
            <button>Add Todo</button>
        </form>);
    }
}

export default TodoForm;