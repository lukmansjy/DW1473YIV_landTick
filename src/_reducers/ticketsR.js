const initialState = {
    data:[],
    isLoading: false,
    error: false,
    loginStatus: false
}

const tickets = (state = initialState, action) => {
    switch(action.type){
        // GET TICKETS TODAY
        case 'GET_TICKETS_TODAY_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_TICKETS_TODAY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                loginStatus: true,
                data: action.payload.data
            }
        case 'GET_TICKETS_TODAY_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: true
            }

        // GET_TICKETS_SEARCH
        case 'GET_TICKETS_SEARCH_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_TICKETS_SEARCH_FULFILLED':
            return {
                ...state,
                isLoading: false,
                loginStatus: true,
                data: action.payload.data
            }
        case 'GET_TICKETS_SEARCH_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: true
            }

        // POST_ADD_TICKET
        case 'POST_ADD_TICKET_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'POST_ADD_TICKET_FULFILLED':
            return {
                ...state,
                isLoading: false,
                loginStatus: true
            }
        case 'POST_ADD_TICKET_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: true
            }

        default:
            return state
    }
}

export default tickets