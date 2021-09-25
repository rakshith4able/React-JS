import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.state = {
            isEditing: false,
            task: ""
        };
    }

    handleDelete(evt) {
        this.props.delete(this.props.id);
    }

    handleEdit() {
        this.setState({ isEditing: true, task: this.props.task });
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleUpdate() {
        this.props.update(this.state.task, this.props.id);
        this.setState({ isEditing: false });
    }



    render() {
        let result;
        if (this.state.isEditing) {
            result = (<div>
                <form>
                    <input type="text" onChange={this.handleChange} value={this.state.task} name="task" />
                    <button onClick={this.handleUpdate}>done</button>
                </form>
            </div>);
        }
        else {
            result = (
                <div>
                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={this.handleDelete}>X</button>
                    <li>{this.props.task}</li>
                </div>);
        }
        return result;
    }
}

export default Todo;