import {combineReducers} from 'redux';
import count from './counter'
import dayRecords from './dayRecords'


const reducer = combineReducers({
    count,
    dayRecords
})

export default reducer