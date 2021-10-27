import React from "react";
import useInputState from './hooks/useInputState';
import { TextField } from "@mui/material";

function EditTodoForm({ editTodo, id, task, toggleIsEditing }) {
    const [value, handleChange, reset] = useInputState(task);

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            editTodo(id, value);
            reset();
            toggleIsEditing();
        }} style={{ marginLeft: "1rem", width: "500%" }} >
            <TextField margin='normal' value={value} onChange={handleChange} fullWidth autoFocus />
        </form>);
}

export default EditTodoForm;