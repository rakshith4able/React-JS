import React, { Component } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
    }

    add(task) {
        this.setState(
            (st) => ({ todos: [...st.todos, task] })
        );
    }

    delete(id) {
        let tasks = this.state.todos.filter(
            (todo) => {
                return todo.id !== id;
            }
        );
        this.setState({ todos: tasks });
    }
    render() {

        const todos = this.state.todos.map(
            (todo) => {
                return <Todo task={todo.task} id={todo.id} delete={this.delete} key={todo.id} />
            }
        );

        return (<div>
            <h1>To Do App</h1>
            <TodoForm add={this.add} />
            <ul>
                {todos}
            </ul>
        </div>);
    }
}

export default TodoList;