const intialState = {
    data: [],
    search: [],
    isLoading: false,
    page: 1,
    totalpage: 1,
    limit: 10,
    total : 0
}

export default notes = (state = intialState, action) => {
    switch(action.type){
        case 'GET_NOTES_PENDING':
        case 'ADD_NOTES_PENDING':
        case 'GET_NOTESID_PENDING':
        case 'GET_NOTESON_PENDING':
        case 'SEARCH_NOTES_PENDING':
        case 'UPDATE_NOTES_PENDING':
        case 'DELETE_NOTES_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_NOTES_REJECTED':
        case 'GET_NOTESON_PENDING':
        case 'GET_NOTESID_REJECTED':
        case 'ADD_NOTES_REJECTED':
        case 'SEARCH_NOTES_REJECTED':
        case 'UPDATE_NOTES_REJECTED':
        case 'DELETE_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false, 
                isError: true,
            }
        case 'GET_NOTESID_FULFILLED':
            let notes1 = (state.data.length != 0) ? [ ...state.data, ...action.payload.data.data] : action.payload.data.data
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: notes1,
                page: action.payload.data.page,
                totalpage: action.payload.data.totalpage,
                limit: action.payload.data.limit,
                total : action.payload.data.total,
                categoryId: action.payload.data.data[0].category.id
            }
        case 'GET_NOTES_FULFILLED':
            let notes2 = (state.data.length != 0) ? [ ...state.data, ...action.payload.data.data] : action.payload.data.data
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: notes2,
                page: action.payload.data.page,
                totalpage: action.payload.data.totalpage,
                limit: action.payload.data.limit,
                total : action.payload.data.total
            }
        case 'GET_NOTESON_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data,
                page: action.payload.data.page,
                totalpage: action.payload.data.totalpage,
                limit: action.payload.data.limit,
                total : action.payload.data.total
            }
        case 'SEARCH_NOTES_FULFILLED':
            let notes3 = (state.search.length != 0) ? [ ...state.search, ...action.payload.data.data] : action.payload.data.data
            return {
                ...state,
                isLoading: false,
                isError: false,
                search: notes3,
                page: action.payload.data.page,
                totalpage: action.payload.data.totalpage,
                limit: action.payload.data.limit,
                total : action.payload.data.total
            }
        case 'ADD_NOTES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: [action.payload.data.data, ...state.data],
            }
        case 'UPDATE_NOTES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data:state.data.map( note =>
                    (note.id == action.payload.data.data.id) ? 
                        action.payload.data.data : note
                )
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