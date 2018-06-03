import React, { Component } from 'react';
import {connect} from 'react-redux';
import TaskList from './TaskList';
import { Button, Well } from 'react-bootstrap';
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import {DELETE_DAY} from "../constants";
import {deleteDay} from "../AC";
import dayRecords from "../reducer/dayRecords";


class Day extends Component {
    // constructor(props) {
    //     super(props)
        // this.state = {
        //     isOpen: this.props.defaultOpen,   
        // }
    // }

    static propTypes = {
        dayRecord: PropTypes.shape({
            date: PropTypes.string.isRequired, 
            tasks: PropTypes.array
        }).isRequired
    }

    componentWillReceiveProps(nextProps) {
        if( nextProps.defaultOpen !== this.props.defaultOpen)  // т.к мы связали props + state
            this.setState({
                isOpen: nextProps.defaultOpen
            })
    }

    render() {    
        const { dayRecord, toggleOpen } = this.props
        const commentsBody = (this.props.isOpen && dayRecord.comments) ? <Well>{dayRecord.comments}</Well> :  ""

        return (
            <div>
                <h1> ----- {dayRecord.date} -----
                <button onClick={this.handleDelDay}>del</button></h1>
                <TaskList dayRecord={dayRecord} />
                <Button onClick={toggleOpen}> 
                    {this.props.isOpen ? 'close' : 'open'}
                </Button>
                {commentsBody}
            </div>
        )
    }

    handleDelDay = () => {
        const {dayRecord:{date}} = this.props
        this.props.deleteDay(date)
    }

}



export default connect(null, {deleteDay}) (toggleOpen(Day))
