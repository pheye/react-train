import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => ({
    onAddTodo: (text) => dispatch({
        type: 'ADD_TODO',
        id: Math.random(),
        name: text,
        completed: false
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo);