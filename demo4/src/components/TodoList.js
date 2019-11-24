import React from 'react';
import styles from './TodoList.module.css';

class TodoList extends React.Component {
    render() {
        const { todos, onToggleComplete } = this.props;
        const ui = todos.map((item, key) => 
            <li key={key} className={item.completed ? styles.completed : null} onClick={() => onToggleComplete(item.id)}>{item.name}</li>
        );
        return <ul>
        {ui}
        </ul>;
    }
}

export default TodoList;