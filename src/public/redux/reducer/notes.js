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
        case 'GET_NOTESN_PENDING':
        case 'SEARCH_NOTESN_REJECTED':
                return {
                    ...state,
                }
        case 'ADD_NOTES_PENDING':
        case 'GET_NOTES_PENDING':
        case 'SEARCH_NOTES_PENDING':
        case 'UPDATE_NOTES_PENDING':
        case 'DELETE_NOTES_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_NOTES_REJECTED':
        case 'ADD_NOTES_REJECTED':
        case 'GET_NOTESN_PENDING':
        case 'SEARCH_NOTESN_REJECTED':
        case 'SEARCH_NOTES_REJECTED':
        case 'UPDATE_NOTES_REJECTED':
        case 'DELETE_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false, 
                isError: true,
            }
        case 'GET_NOTESN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: [ ...state.data, ...action.payload.data.data],
                page: action.payload.data.page,
                totalpage: action.payload.data.totalpage,
                limit: action.payload.data.limit,
                total : action.payload.data.total,
                categoryId: action.payload.data.categoryId
            }
        case 'SEARCH_NOTESN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                search: [ ...state.data, ...action.payload.data.data],
                page: action.payload.data.page,
                totalpage: action.payload.data.totalpage,
                limit: action.payload.data.limit,
                total : action.payload.data.total
            }
        case 'GET_NOTES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data,
                page: action.payload.data.page,
                totalpage: action.payload.data.totalpage,
                limit: action.payload.data.limit,
                total : action.payload.data.total,
                categoryId : action.payload.data.categoryId,
                sort: action.payload.data.sort
                
            }
        case 'SEARCH_NOTES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                search: action.payload.data.data,
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
            state.data.filter(note => note.id !== action.payload.data.data.id )
            
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: [action.payload.data.data, ...state.data],
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