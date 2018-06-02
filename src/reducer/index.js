import {combineReducers} from 'redux';
import count from './counter'
import dayRecords from './dayRecords'
// import {tasksReducer} from "./tasksReducer";

const reducer = combineReducers({
    count,
    dayRecords,
});

export default reducer