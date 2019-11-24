const todos = (state = [{
    id: 1,
    name: '测试项',
    completed: false
}, {
    id:2,
    name: '测试项2',
    completed: true
}
], action) => {
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

export default todos;