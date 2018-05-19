import {DELETE_RECORD} from '../constants'
import defaultDayRecords from '../fixtures'

export default (dayRecords = defaultDayRecords, action) => {
    const {type, payload} = action;

    switch (type) {

        case DELETE_RECORD:
            console.log('received delete', payload.id);
            // TODO: чтобы работало удаление надо передавать еще и день, которому принадлежат taskList.
            const newArr = dayRecords.filter(record => record.id !== payload.id);
            console.log('is array new? ', newArr === dayRecords)
            return newArr


        // case LOAD_DAYRECORDS :
        //     return records
        default :
            return dayRecords
    }

}