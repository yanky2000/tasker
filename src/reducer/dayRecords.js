import {LOAD_DAYRECORDS} from '../constants'
import dayRecords from '../fixtures'

export default (records = dayRecords, action) => {
    const {type} = action;
    switch (type) {
        // case LOAD_DAYRECORDS :
        //     return records
        default : return records
    }

}