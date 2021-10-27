import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { Paper, AppBar, Toolbar, Grid, Typography } from '@mui/material';
import { v4 as uuid } from 'uuid';
function TodoApp() {

    const initialTodos = [
        { id: 1, task: "Clean Fish", completed: false },
        { id: 2, task: "Wash Car", completed: true },
    ];


    const [todos, setTodos] = useState(initialTodos);

    const addTodo = newTodo => {
        setTodos([...todos, { id: uuid(), task: newTodo, completed: false }]);
    }

    const removeTodo = todoId => {
        const updatedTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(updatedTodos);
    };

    const toggleTodo = todoId => {
        const updatedTodos = todos.map((todo) => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    }

    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(
            (todo) => todo.id === todoId ? { ...todo, task: newTask } : todo
        );
        setTodos(updatedTodos);
    }




    return (<Paper style={{ padding: 0, margin: 0, height: "100vh", backgroundColor: "#fafafa", }} elevation={0}>
        <AppBar color='primary' position='static' style={{ height: "64px" }}>
            <Toolbar>
                <Typography colors='inherit'>Todos with hooks</Typography>
            </Toolbar>
        </AppBar>
        <Grid container justifyContent='center' style={{ marginTop: '1rem' }}>
            <Grid item xs={11} md={8} lg={4}>
                <TodoForm addTodo={addTodo} />
                <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
            </Grid>
        </Grid>
    </Paper>);
}

export default TodoApp;