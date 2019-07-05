const intialState = {
    data: [],
    isLoading: false,
}

export default categories = (state = intialState, action) => {
    switch(action.type){
        case 'GET_CATEGORIES_FULFILLED':
            return {
                isLoading: false,
                isError: false,
                data:action.payload.data.data
            }
        // Add category
        case 'ADD_CATEGORIES_PENDING':
        case 'DELETE_CATEGORIES_REJECTED':
        case 'GET_CATEGORIES_PENDING':
            return {
                ...state, // get all previous state
                isLoading: true
            }
        case 'ADD_CATEGORIES_REJECTED':
        case 'DELETE_CATEGORIES_REJECTED':
        case 'GET_CATEGORIES_REJECTED':
            return {
                ...state,
                isLoading: false, 
                isError: true,
            }
        case 'ADD_CATEGORIES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: [action.payload.data.data].concat(...state.data)
            }
        case 'DELETE_CATEGORIES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: state.data.filter(note => note.id !== action.payload.data.data )
            }
        default:
            return state;
    }
}
