import {combineReducers} from 'redux'
import cardItems from './reducer'
import conterItem from './reducerConter'

export default combineReducers({
    cardItems,
    conterItem,
})