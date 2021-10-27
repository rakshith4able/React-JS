import React from 'react';
import Todo from './Todo';
import { Paper, List, Divider } from '@mui/material';

function TodoList({ removeTodo, todos, toggleTodo, editTodo }) {
    if (todos.length)
        return (
            <Paper>
                <List>
                    {
                        todos.map((todo, i) => (
                            <>
                                <Todo task={todo.task} completed={todo.completed} key={todo.id} removeTodo={removeTodo} id={todo.id}
                                    toggleTodo={toggleTodo} editTodo={editTodo} />
                                {i < todos.length - 1 && <Divider />}
                            </>
                        ))
                    }
                </List>
            </Paper>
        );
    return null;
}

export default TodoList;