import { connect } from 'react-redux';
import TodoList from "../components/TodoList";


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "Completed":
      return todos.filter(item => item.completed);
    case "Active":
      return todos.filter(item => !item.completed);
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos.present, state.filters)
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
