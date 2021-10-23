import {combineReducers} from 'redux'
import appReducer from './reducer/reducer'

export default combineReducers ({
    data:appReducer
})