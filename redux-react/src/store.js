import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { todos } from './reducers/todos'

export const store = createStore(combineReducers({
    todos: todos
}), applyMiddleware(thunk))
