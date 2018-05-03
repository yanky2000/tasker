import React, {Component} from 'react'
import {connect} from 'react-redux'

export class Counter extends Component {
    render() {
        return (
            <div>
                count: {this.props.count}
                <button onClick={this.handleIncrement()}>increment</button>
            </div>
        )
    }

    handleIncrement = () => {
        console.log('----- INCREMENT',)
    };


}

const MapStateToProps = (state) => ({
    count: state.count
})

export default connect(MapStateToProps)(Counter)