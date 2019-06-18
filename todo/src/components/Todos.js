import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';

const Todos = props => {
    let toggle;
    if (props.todo.completed) {
        toggle = "completed";
    }

    return (
        <li className={toggle} onClick={() => props.toggleTodo(props.todo.id)}>
            {props.todo.value}
            <button onClick={() => props.deleteTodo(props.todo.id)}>x</button>
        </li>
    )
}

export default connect(null, { toggleTodo, deleteTodo })(Todos);