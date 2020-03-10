const initialState = {
    dataTicketsUser:[],
    orderDetail: [],
    dataOrders: [],
    isLoading: false,
    error: false
}

const tickets = (state = initialState, action) => {
    switch(action.type){
        // GET ALL ORDERS
        case 'GET_ALL_ORDERS_USER_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_ALL_ORDERS_USER_FULFILLED':
            return {
                ...state,
                isLoading: false,
                dataTicketsUser: action.payload.data
            }
        case 'GET_ALL_ORDERS_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: true
            }

        // ORDER TICKET
        case 'POST_ORDER_TICKET_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'POST_ORDER_TICKET_FULFILLED':
            const newDataOrder = [...state.dataTicketsUser, action.payload.data]
            return {
                ...state,
                isLoading: false,
                dataTicketsUser: newDataOrder
            }
        case 'POST_ORDER_TICKET_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: true
            }

        // GET_DETAIL_ORDER
        case 'GET_DETAIL_ORDER_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_DETAIL_ORDER_FULFILLED':
            return {
                ...state,
                isLoading: false,
                orderDetail: action.payload.data
            }
        case 'GET_DETAIL_ORDER_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: true
            }

        // POST_PAY_ORDER
        case 'POST_PAY_ORDER_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'POST_PAY_ORDER_FULFILLED':
            return {
                ...state,
                isLoading: false
            }
        case 'POST_PAY_ORDER_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: true
            }

        // GET_ALL_ORDER_ADMIN
        case 'GET_ALL_ORDER_ADMIN_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_ALL_ORDER_ADMIN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                dataOrders: action.payload.data.reverse()
            }
        case 'GET_ALL_ORDER_ADMIN_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: true
            }

        // POST_APPROVE_ORDER
        case 'PUT_APPROVE_ORDER_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'PUT_APPROVE_ORDER_FULFILLED':
            return {
                ...state,
                isLoading: false
            }
        case 'PUT_APPROVE_ORDER_REJECTED':
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