import React, { Component } from 'react';
import DayList from './components/DayList';
import Counter from './components/Counter';



class App extends Component {
  render() {
    return (
        <div>
        <Counter />
        <DayList />
        </div>
    );
  }
}

export default App;
