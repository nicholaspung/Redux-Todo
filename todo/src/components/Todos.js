import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

const Todos = props => {
    return (
        <li onClick={() => props.toggleTodo(props.todo.id)}>
            {props.todo.value}
        </li>
    )
}

export default connect(null, { toggleTodo })(Todos);