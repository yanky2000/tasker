import {DELETE_TASK} from '../constants'
import {tasks} from '../fixtures'

export function tasks(tasks, action) {
    const {type, payload} = action
    switch (type) {
        case DELETE_TASK:
            console.log('------------deleted!', payload.id)
            return tasks
        default : return
    }

}