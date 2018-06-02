import {combineReducers} from 'redux';
import count from './counter'
import dayRecords from './dayRecords'
import {tasks} from "./tasksReducer";

const reducer = combineReducers({
    count,
    dayRecords,
    tasks
});

export default reducer