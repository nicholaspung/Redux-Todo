import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';

const Todos = props => {
    let toggle, showButton = '';
    if (props.todo.completed) {
        toggle = "completed";
        showButton = <button onClick={() => props.deleteTodo(props.todo.id)}>x</button>
    }

    return (
        <li className={toggle} onClick={() => props.toggleTodo(props.todo.id)}>
            {props.todo.value}
            {showButton}
        </li>
    )
}

export default connect(null, { toggleTodo, deleteTodo })(Todos);