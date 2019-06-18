import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodos extends React.Component {
    state = {
        newTodoText: ''
    }

    handleInputChange = e => {
        this.setState({ newTodoText: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state.newTodoText)
        this.setState({ newTodoText: '' })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="add todos" onChange={e => this.handleInputChange(e)} value={this.state.newTodoText}/>
                <button>add!</button>
            </form>
        );
    }
}

export default connect(null, { addTodo })(AddTodos);