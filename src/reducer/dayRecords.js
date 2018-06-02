import {DELETE_TASK, LOAD_DAYRECORDS} from '../constants'
import dayRecords from '../fixtures'


export default (records = dayRecords, action) => {
    const {type, payload} = action;

    switch (type) {
        case DELETE_TASK :
            return records.tasks.filter(task => task.id === payload.id)
        default :
            return records

    }

}