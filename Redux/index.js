const { createStore, combineReducers } = require('redux')

const filters = {
    all: 'ALL',
    completed: 'COMPLETED',
    incompleted: 'INCOMPLETED',
}

// Actions:
const SET_FILTER = 'SET_FILTER'
const ADD_TODO = 'ADD_TODO'
const COMPLETE_TODO = 'COMPLETE_TODO'

// ActionCreator:
const setFilter = payload => ({ type: SET_FILTER, payload })
const addTodo = payload => ({ type: ADD_TODO, payload })
const completeTodo = payload => ({ type: COMPLETE_TODO, payload })

//  Estado inicial:
// const initialState = {
//     todos: [],
//     filter: filters.all,
// }

// Reducers separados:
const filterReducer = (state = filters.all, action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.payload
        default:
            return state
    }
}

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [action.payload].concat(state)

        case COMPLETE_TODO:
            return state.map((x, i) => i === action.payload ? { ...x, completed: true } : x)

        default:
            return state
    }
}

//  Reducer:
const reducer = combineReducers({
    filter: filterReducer,
    todos: todosReducer,
})

// const reducer = (state = {}, action) => {
//     return {
//         filter: filterReducer(state.filter, action),
//         todos: todosReducer(state.todos, action)
//     }
// }

// Store
const store = createStore(reducer)

// Subscribir:
store.subscribe(() => console.log(store.getState()))

// Disparadores
store.dispatch(addTodo({ text: 'PrimerTodo' }))
store.dispatch(setFilter(filters.completed))

