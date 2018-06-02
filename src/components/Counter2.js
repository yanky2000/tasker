import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from '../AC';
import store from '../store';

export class Counter2 extends Component {
    state = {
        count: store.getState().count
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(this.handleIncrement);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div>
                <h2>COUNT: {this.state.count}</h2>
                <button onClick={this.clickIncrement}>increment</button>
            </div>
        );
    }

    clickIncrement = () => {
        console.log('----- INCREMENT');
        const incr = increment();
        store.dispatch({ type: 'INCREMENT' });
    };

    handleIncrement = () => {
        this.setState({
            count: store.getState().count,
        });
    }
}

