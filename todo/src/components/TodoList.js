import React from 'react';
import Todos from './Todos';

import { connect } from 'react-redux';

const TodoList = ({ todos }) => {
    console.log(todos)
    return (
        <div>
            Current Todos
            <ul>
                {todos.map(todo => <Todos todo={todo} key={todo.id} />)}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {})(TodoList);