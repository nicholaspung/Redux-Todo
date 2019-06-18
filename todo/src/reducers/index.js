import { ADD_TODO } from '../actions';

const initializeState = {
    todos: [],
    newTodoText: ''
}

let mapKey = 0
export default (state = initializeState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                type: ADD_TODO,
                todos: [
                    ...state.todos,
                    {
                        id: mapKey++,
                        value: action.payload,
                        completed: false
                    }
                ]
            }
        default:
            return state
    }
}