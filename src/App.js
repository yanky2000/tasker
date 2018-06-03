import React, {Component} from 'react';
import DayList from './components/DayList';
import Counter from './components/Counter';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


class App extends Component {
    render() {
        return (
            <div>
                {/*<Counter/>*/}
                <DayPicker/>
                <DayList/>
            </div>
        );
    }
}

export default App;
