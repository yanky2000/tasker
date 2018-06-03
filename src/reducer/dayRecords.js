import {DELETE_TASK, DELETE_DAY} from '../constants'
import dayRecords from '../fixtures'


export default (records = dayRecords, action) => {
    const {type, payload} = action;

    switch (type) {

        case DELETE_DAY:
            return records.filter(day => day.date !== payload.date)

        case DELETE_TASK :
            console.log(payload.date, ' deleting task', payload.taskId);

            records.forEach((item, i, arr) => {
                if (item.date == payload.date) {
                    // debugger
                    // console.log(item.tasks[payload.taskId-1].title)
                    let filtered = item.tasks.filter(task => task.id !== payload.taskId)
                    item.tasks = filtered;
                }
            });
            console.dir(records)
            return records



            // return records.tasks.filter(task => task.id === payload.id)
        default :
            return records

    }

}