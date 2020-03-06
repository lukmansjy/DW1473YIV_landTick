import { combineReducers, createStore, applyMiddleware } from "redux";

import {logger, promise} from './middleware'

import users from '../_reducers/usersR'

const reducer = combineReducers({
    users
})

const store = createStore(reducer, applyMiddleware(logger, promise))

export default store