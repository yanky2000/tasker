import React, { Component } from 'react';
import Task from './Task';
import TaskList from './TaskList';
import { Button, Well } from 'react-bootstrap';
import PropTypes from 'prop-types'

class Day extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: this.props.defaultOpen,   
        }
    }

    static PropTypes = {
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
        const {dayRecord} = this.props
        const commentsBody = (this.state.isOpen && dayRecord.comments) ? <Well>{dayRecord.comments}</Well> :  ""

        return (
            <div>
                <h1> ----- {dayRecord.date} -----</h1>
                <TaskList tasks={dayRecord.tasks}/>
                <Button onClick={this.toggleOpen}>
                    {this.state.isOpen ? 'close' : 'open'}
                </Button>
                {commentsBody}
            </div>
        )
    }  

    toggleOpen = () => {
        this.setState({
            isOpen : !this.state.isOpen
        })
    }   
}

export default Day;
