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
    
    onSubmit = (e) => {
      const { onAddTodo } = this.props;
      const { text } = this.state;
      e.preventDefault();
      onAddTodo(text);
    }

    render () {
        const { text } = this.state;

        return <div>
        <form onSubmit={this.onSubmit} >
        <input type="text" value={text}  onChange={this.onTextChange}/>
        <button type="submit">添加</button>
        </form>
        </div>;
    }
}

export default AddTodo;
