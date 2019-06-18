import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initializeState = {
    todos: []
}

let mapKey = 0
export default (state = initializeState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [
                    ...state.todos,
                    {
                        id: mapKey++,
                        value: action.payload,
                        completed: false
                    }
                ]
            }
        case TOGGLE_TODO:
            return {
                todos: state.todos.map(todo => {
                    if (todo.id !== action.payload) {
                        return todo;
                    }

                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                })
            }
        default:
            return state
    }
}