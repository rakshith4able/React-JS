import uuid from "uuid/v4";

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [...state, { id: uuid(), task: action.newTask, completed: false }];
        case 'remove':
            return state.filter(todo => todo.id !== action.id);
        case 'toggle':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        case 'edit':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, task: action.newTask } : todo
            );
        default:
            return state;
    }
}

export default reducer;

