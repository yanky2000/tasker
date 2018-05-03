import React, { Component } from 'react';
import Daylist from './components/DayList';
import Counter from './components/Counter'

class App extends Component {
  render() {
    return (
        <div>
        <Counter />
        <Daylist />
        </div>
    );
  }
}

export default App;
