const initialState = {
    name: null,
    admin: null,
    dataError:[],
    isLoading: false,
    error: false,
    loginStatus: false
}

const users = (state = initialState, action) => {
    switch(action.type){

        // USER LOGIN
        case 'POST_USER_LOGIN_PENDING':
            return {
                ...state,
                isLoading: true,
                dataError:[],
            }
        case 'POST_USER_LOGIN_FULFILLED':
            window.localStorage.setItem('token', action.payload.data.token)
            return {
                ...state,
                isLoading: false,
                loginStatus: true,
                dataError: [],
                name: action.payload.data.name,
                admin: action.payload.data.admin
            }
        case 'POST_USER_LOGIN_REJECTED':
            let error = []
            if(action.response == null){
                error = {
                    data: null,
                    errorNetwork: action.payload
                }
            }
            if(action.payload.response != null){
                error = {
                    data: action.payload.response.data,
                    errorNetwork: null
                }
            }
            return {
                ...state,
                isLoading: false,
                error: true,
                dataError: error,
                data: []
                
            }
        
        // POST USER LOGIN TOKEN
        case 'USER_LOGIN_TOKEN_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'USER_LOGIN_TOKEN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                loginStatus: true,
                name: action.payload.data.name,
                admin: action.payload.data.admin
            }
        case 'USER_LOGIN_TOKEN_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: true
            }
        
        // LOGOUT
        case 'USER_LOGOUT':
            return {
                admin: null,
                isLoading: false,
                error: false,
                dataError: []
            }

        // USER REGISTER
        case 'POST_USER_REGISTER_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'POST_USER_REGISTER_FULFILLED':
            window.localStorage.setItem('token', action.payload.data.token)
            return {
                ...state,
                isLoading: false,
                loginStatus: true,
                name: action.payload.data.name,
                admin: action.payload.data.admin
            }
        case 'POST_USER_REGISTER_REJECTED':
            return {
                ...state,
                isLoading: false,
                error: true
            }

        default:
            return state
    }
}

export default users