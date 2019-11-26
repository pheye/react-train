import { connect } from 'react-redux';
import { createSelector } from 'reselect'
import TodoList from "../components/TodoList";


const getVisibilityFilter = (state) => state.filters
const getTodos = (state) => state.todos.present

const getVisibleTodos = createSelector( 
  [getVisibilityFilter, getTodos],
  (filter, todos) => {
  switch (filter) {
    case "Completed":
      return todos.filter(item => item.completed);
    case "Active":
      return todos.filter(item => !item.completed);
    default:
      return todos;
  }
})

const mapStateToProps = state => ({
  todos: getVisibleTodos(state)
});

const mapDispatchToProps = dispatch => ({
    onToggleComplete: id => dispatch({
        type: 'TOOGLE_TODO',
        id
    }) 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
