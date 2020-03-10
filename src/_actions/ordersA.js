import axios from 'axios'

import {baseUrlApiVersion} from '../config'

export const orderTicket = (dataOrder)=>{
    const token = window.localStorage.getItem('token')
    return {
        type: 'POST_ORDER_TICKET',
        payload: axios({
            method: 'POST',
            url: `${baseUrlApiVersion}/order`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: dataOrder
        })
    }
}

export const getAllOrders = ()=>{
    const token = window.localStorage.getItem('token')
    return {
        type: 'GET_ALL_ORDERS_USER',
        payload: axios({
            method: 'GET',
            url: `${baseUrlApiVersion}/orders_user`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}

export const getDetailOrder = (id)=>{
    const token = window.localStorage.getItem('token')
    return {
        type: 'GET_DETAIL_ORDER',
        payload: axios({
            method: 'GET',
            url: `${baseUrlApiVersion}/order/${id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}

export const postPayOrder = (data)=>{
    const token = window.localStorage.getItem('token')
    return {
        type: 'POST_PAY_ORDER',
        payload: axios({
            method: 'POST',
            url: `${baseUrlApiVersion}/order_pay`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: data
        })
    }
}

export const getAllOrdersAdmin = ()=>{
    const token = window.localStorage.getItem('token')
    return {
        type: 'GET_ALL_ORDER_ADMIN',
        payload: axios({
            method: 'GET',
            url: `${baseUrlApiVersion}/orders`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}

export const approveOrder = (id, data)=>{
    const token = window.localStorage.getItem('token')
    return {
        type: 'PUT_APPROVE_ORDER',
        payload: axios({
            method: 'PUT',
            url: `${baseUrlApiVersion}/order/${id}`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: data
        })
    }
}