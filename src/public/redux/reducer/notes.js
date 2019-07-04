const intialState = {
    data: [],
    search: [],
    isLoading: false,
}

export default notes = (state = intialState, action) => {
    switch(action.type){
        case 'GET_NOTES_PENDING':
        case 'ADD_NOTES_PENDING':
        case 'SEARCH_NOTES_PENDING':
        case 'DELETE_NOTES_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_NOTES_REJECTED':
        case 'ADD_NOTES_REJECTED':
        case 'SEARCH_NOTES_REJECTED':
        case 'DELETE_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false, 
                isError: true,
            }
        case 'GET_NOTES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data,
            }
        case 'SEARCH_NOTES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                search: action.payload.data.data,
            }
        case 'ADD_NOTES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: [action.payload.data.data, ...state.data],
            }
        case 'UPDATE_NOTES_PENDING':
            return {
                ...state,
                isLoading: true
                }
        case 'UPDATE_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false, 
                isError: true,
            }
        case 'UPDATE_NOTES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data:state.data.map( note => (
                    (note.id == action.payload.data.data.id) ? action.payload.data.data : note
                ))
            }
        case 'DELETE_NOTES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data:state.data.filter(note => note.id !== action.payload.data.data )
            }
        default:
            return state;
    }
}