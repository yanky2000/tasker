import {INCREMENT, DELETE_TASK, DELETE_DAY} from "../constants";
import {LOAD_DAYRECORDS} from '../constants'

export function increment() {
    return {type: INCREMENT}
}

export function deleteTask({date,taskId}) {
    console.log('dispatching delete---->', date)
    return {
        type: DELETE_TASK,
        payload: {
            date,
            taskId
        }
    }
}

export function deleteDay(date) {
    console.log('dispatching delete DAY ---->', date)
    return {
        type: DELETE_DAY,
        payload: {
            date,

        }
    }
}

