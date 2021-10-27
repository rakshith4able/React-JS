import React from 'react';
import Todo from './Todo';
import { Paper, List, Divider } from '@mui/material';

function TodoList({ removeTodo, todos, toggleTodo, editTodo }) {
    return (
        <Paper>
            <List>
                {
                    todos.map((todo) => (
                        <>
                            <Todo task={todo.task} completed={todo.completed} key={todo.id} removeTodo={removeTodo} id={todo.id}
                                toggleTodo={toggleTodo} editTodo={editTodo} />
                            <Divider />
                        </>
                    ))
                }
            </List>
        </Paper>
    );
}

export default TodoList;