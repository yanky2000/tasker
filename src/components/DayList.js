import React, { Component } from 'react';
import Day from './Day'
import dayRecords from '../fixtures';

class DayList extends Component {
  render() {
    const body = dayRecords.map((record, index) => <Day dayRecord={record} key={record.date} defaultOpen={index === 0}/>);//make first comments visible

    return (
      <div>
        {body}
      </div>
    );
  }
}

export default DayList;
