// Make Type
const makeType = mod => type => `${mod}/${type}`

// Make Action Creator
const mac = (type, ...argNames) => (...args) => {
    const action = { type }
    argNames.forEach((arg, index) => {
        action[argNames[index]] = args[index]
    })
    return action
}

// Create Reducer
const createReducer = (IS, handlers) => (state = IS, action) => {
    if (handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action)
    }
    return state
}


const fetchReducerCreator = resource => {

    const t = makeType(resource)
    const FETCH_START = t('fetch-start')
    const FETCH_SUCCESS = t('fetch-success')
    const FETCH_ERROR = t('fetch-error')

    // Funciones que utilizará el REDUCER
    const fetchStartReduce = (state, action) => ({
        ...state,
        fetching: true
    })
    const fetchSuccessReduce = (state, action) => ({
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload
    })
    const fetchErrorReduce = (state, action) => ({
        ...state,
        fetching: false,
        error: action.error
    })

    const initialState = {
        data: [],
        fetched: false, // cuando ya se trajo los datos de la API
        fetching: false, // cuando esta cargando la aplicación
    }


    // REDUCER:
    const reducer = createReducer(initialState, {
        [FETCH_START]: fetchStartReduce,
        [FETCH_SUCCESS]: fetchSuccessReduce,
        [FETCH_ERROR]: fetchErrorReduce,
    })

    // Action Creator
    const startFetch = mac(FETCH_START)
    const successFetch = mac(FETCH_SUCCESS, 'payload')
    const errorFetch = mac(FETCH_ERROR, 'error')

    // Redux Thunk
    return {
        reducer,
        fetch: () => async (dispatch, getState) => {
            dispatch(startFetch())
            try {
                const response = await fetch(`/${resource}`)
                const data = await response.json()
                dispatch(successFetch(data))
            } catch (e) {
                dispatch(errorFetch(e))
            }
        }
    }


}


const createReducer = fetchReducerCreator('todos')

export default createReducer.reducer
export const fetch = createReducer.fetch

// Simulando estar en el otro archivo de productos seria:
const createReducer = fetchReducerCreator('productos')
export default createReducer.reducer
export const fetch = createReducer.fetch



