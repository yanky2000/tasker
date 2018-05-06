import React, { Component } from 'react';
import DayList from './components/DayList';
import Counter from './components/Counter';
import dayRecords from './fixtures'


class App extends Component {
  render() {
    return (
        <div>
        <Counter />
        <DayList dayRecords={dayRecords}/>
        </div>
    );
  }
}

export default App;
