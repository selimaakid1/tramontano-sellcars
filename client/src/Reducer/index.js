import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import AlertReducer from './AlertReducer'
import CarReducer from './CarReducer'




export default combineReducers({auth: AuthReducer, alert: AlertReducer, car: CarReducer})

