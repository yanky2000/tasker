import React, {Component} from 'react';
import DayList from './components/DayList';
import Counter from './components/Counter';
import {streamProps} from 'react-streams';
import {delay, startWith} from 'rxjs/operators'


class App extends Component {
    render() {
        return (
            <div>
                <Counter/>
                <Toggle name={'john'}>
                    {props => (
                        <h1>Hello {props.name}!</h1>
                    )}
                </Toggle>
                <DayList/>
            </div>
        );
    }
}



const Toggle = streamProps(
    delay(3000),
    startWith({name:'wait for 2seconds!!!'})
)






export default App;
