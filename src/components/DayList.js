import React, {Component} from 'react';
import {connect} from 'react-redux';
import Day from './Day';
import PropTypes from 'prop-types';

class DayList extends Component {
    static propTypes = {
        dayRecords: PropTypes.array.isRequired
    };

    render() {
        const {dayRecords} = this.props;
        const body = dayRecords.map((record, index) =>
            <Day dayRecord={record}
                 key={record.date+new Date()}
                 defaultOpen={index === 0} //make first comments visible
            />);

        return (
            <div>
                {body}
            </div>
        );
    }
}
const mapStateToProps  = (state) => ({
    dayRecords: state.dayRecords
});

export default connect(mapStateToProps) (DayList);
