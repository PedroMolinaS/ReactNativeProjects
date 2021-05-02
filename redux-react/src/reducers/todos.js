
const initialState = [
    { id: 1, desc: 'todo 1', completed: true },
    { id: 2, desc: 'todo 2', completed: false },
    { id: 3, desc: 'todo 3', completed: false },
    { id: 4, desc: 'todo 4', completed: false },
    { id: 5, desc: 'todo 5', completed: false },
    { id: 6, desc: 'todo 6', completed: false },
    { id: 7, desc: 'todo 7', completed: true },

]

const COMPLETE = 'COMPLETE'
const SUBMIT = 'SUBMIT'
const START_SUBMIT = 'START_SUBMIT'
const ERROR_SUBMIT = 'ERROR_SUBMIT'

export const complete = (id) => ({
    type: COMPLETE,
    payload: id,
})

export const submit = todo => ({
    type: SUBMIT,
    payload: todo,
})

export const startSubmit = () => ({
    type: START_SUBMIT,
})

export const errorSubmit = (error) => ({
    type: ERROR_SUBMIT,
    error: error,
})

export const todos = (state = initialState, action) => {
    switch (action.type) {
        case COMPLETE:
            return state.map(x => x.id === action.payload ? ({ ...x, completed: !x.completed }) : ({ ...x }))

        case SUBMIT:
            // return state.concat(action.payload)
            return [action.payload].concat(state)

        default:
            return state
    }
}

export const saveTodo = (text) => async (dispatch, getState) => {
    const state = getState()
    // console.log(state);

    dispatch(startSubmit())
    try {
        let todo = {
            desc: text,
            completed: false,
        }
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
            method: 'POST',
            body: JSON.stringify(todo)
        })
        const id = await response.json()
        // console.log(id);

        dispatch(submit({
            ...todo,
            id,
        }))

    } catch (e) {
        dispatch(errorSubmit(e))
    }
}


