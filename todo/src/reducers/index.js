export const ADD_TODO = "ADD_TODO";

const initializeState = {
    todos: []
}

export const reducer = (state = initializeState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                type: ADD_TODO,
                payload: action.payload
            }
        default:
            return state
    }
}