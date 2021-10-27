import React from 'react';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import { ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
function Todo({ task, completed, id, removeTodo, toggleTodo, editTodo }) {

    const [isEditing, toggleIsEditing] = useToggleState(false);
    return (
        <ListItem>
            {isEditing ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggleIsEditing={toggleIsEditing} /> :
                <>
                    <Checkbox onClick={() => { toggleTodo(id) }} checked={completed} >
                    </Checkbox>
                    <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton>
                            <Delete onClick={() => removeTodo(id)} />
                        </IconButton>
                        <IconButton>
                            <Edit onClick={toggleIsEditing} />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }
        </ListItem>);

}

export default Todo;