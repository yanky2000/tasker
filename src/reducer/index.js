import {combineReducers} from 'redux';
import {count} from './counter'
import {dayRecords} from './dayRecords'


export const reducer = combineReducers({
    count,
    dayRecords
});

export const testReducer = ({action, state}) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
    }
    return state
}