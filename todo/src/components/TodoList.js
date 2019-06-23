import React from 'react';
import Todos from './Todos';
import SaveButton from './SaveButton';

import { connect } from 'react-redux';

const TodoList = ({ todos }) => {
    return (
        <div>
            <div>
                Current Todos
                <SaveButton />
            </div>
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