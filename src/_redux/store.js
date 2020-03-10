import { combineReducers, createStore, applyMiddleware } from "redux";

import {logger, promise} from './middleware'

import users from '../_reducers/usersR'
import tickets from '../_reducers/ticketsR'
import orders from '../_reducers/ordersR'

const reducer = combineReducers({
    users,
    tickets,
    orders
})

const store = createStore(reducer, applyMiddleware(logger, promise))

export default store