import React from 'react';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onTextChange  = (e) =>  {
        this.setState({
            text: e.target.value
        })
    }

    render () {
        const { onAddTodo } = this.props;
        const { text } = this.state;

        return <div>
        <input type="text" value={text}  onChange={this.onTextChange}/>
        <button onClick={() => onAddTodo(text)}>添加</button>
        </div>;
    }
}

export default AddTodo;