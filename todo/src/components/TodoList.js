import React from 'react';
import Todos from './Todos';

import { connect } from 'react-redux';

const TodoList = ({ todos }) => {
    console.log(todos)
    return (
        <div>
            Current Todos
            {todos.map(todo => <Todos todo={todo} key={todo.id} />)}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {})(TodoList);