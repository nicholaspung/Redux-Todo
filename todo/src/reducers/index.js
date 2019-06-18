import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions';

let data;
if (JSON.parse(localStorage.getItem("todos"))) {
    data = JSON.parse(localStorage.getItem("todos"))
} else {
    data = []
}

const initializeState = {
    todos: data
}

let mapKey = initializeState.todos.length
export default (state = initializeState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
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
                ...state,
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
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => {
                    if (todo.id !== action.payload) {
                        return true;
                    }

                    return false;
                })
            }
        default:
            return state
    }
}