import undoable, { distinctState } from 'redux-undo'

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    completed: action.completed
                }
            ]
        case 'TOOGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id) ?
                    { ...todo, completed: !todo.completed }
                    :
                    todo
            );
        default:
            return state;
    }
}

const undoableTodos = undoable(todos, {
  filter: distinctState()
})

export default undoableTodos
