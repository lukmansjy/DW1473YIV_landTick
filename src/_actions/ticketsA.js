import axios from 'axios'

import {baseUrlApiVersion} from '../config'

export const getTicketsToday = (dateNow)=>{
    return {
        type: 'GET_TICKETS_TODAY',
        payload: axios({
            method: 'GET',
            url: `${baseUrlApiVersion}/tickets?start_time=${dateNow}`
        })
    }
}

export const getTicketsSearch = (data)=>{
    return {
        type: 'GET_TICKETS_SEARCH',
        payload: axios({
            method: 'GET',
            url: `${baseUrlApiVersion}/tickets`,
            params: data
        })
    }
}

export const addTicket = (data)=>{
    const token = window.localStorage.getItem('token')
    return {
        type: 'POST_ADD_TICKET',
        payload: axios({
            method: 'POST',
            url: `${baseUrlApiVersion}/ticket`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: data
        })
    }
}

