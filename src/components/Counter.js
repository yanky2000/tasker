import React, {Component} from 'react'
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends Component {
    render() {
        return (
            <div>
                count: {this.props.counts}
                <button onClick={this.clickIncrement}>increment</button>
            </div>
        )
    }

    clickIncrement = () => {
        console.log('----- INCREMENT',);
        this.props.handleIncrement()
    };

}

const MapStateToProps = (state) => ({
    counts: state.count
})

export default connect(MapStateToProps, {
    handleIncrement: increment
})(Counter)