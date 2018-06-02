import {INCREMENT, DELETE_TASK} from "../constants";
import {LOAD_DAYRECORDS} from '../constants'

export function increment() {
    return {type: INCREMENT}
}

export function deleteTask(id) {
    console.log('dispatching delete---->', id)
    return {
        type: DELETE_TASK,
        payload: {id}
    }
}
