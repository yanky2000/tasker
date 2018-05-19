import {INCREMENT, DELETE_RECORD, LOAD_DAYRECORDS} from "../constants";


export function increment() {
    return {type: INCREMENT}
}

export function handleDelete(id) {
    console.log('dispatching delete---->', id)
    return {
        type: DELETE_RECORD,
        payload: {id}
    }
}

