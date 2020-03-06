import axios from 'axios'

import {baseUrlApiVersion} from '../config'

export const userLogin = (data)=>{
    return {
        type: 'POST_USER_LOGIN',
        payload: axios({
            method: 'POST',
            url: `${baseUrlApiVersion}/login`,
            data: data
        })
    }
}

export const userLoginToken = (data)=>{
    return {
        type: 'USER_LOGIN_TOKEN',
        payload: axios({
            method: 'POST',
            url: `${baseUrlApiVersion}/loginToken`,
            headers: {
                Authorization: `Bearer ${data.token}`
            },
            data: data
        })
    }
}

export const destroyStore = ()=>{
    return {
        type: 'USER_LOGOUT',
        payload: null
    }
}

export const userRegister = (data) =>{
    return {
        type: 'POST_USER_REGISTER',
        payload: axios({
            method: 'POST',
            url: `${baseUrlApiVersion}/register`,
            data: data
        })
    }
}