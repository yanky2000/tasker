import React, {Component} from 'react'
import Task from './Task'
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import accordion from '../decorators/accordion';
import PropTypes from 'prop-types';

class TasksList extends Component {

    static propTypes = {
        tasks: PropTypes.array.isRequired,
        // from accordion
        openTaskId: PropTypes.number,
        toggleOpen: PropTypes.func.isRequired


    };

    render() {
        const {tasks, toggleOpen, openTaskId} = this.props
        const tasksList = tasks.map(task =>
            <ListGroupItem key={task.title}>
                <Task
                    task={task}
                    openTaskId={openTaskId}
                    toggleOpen={toggleOpen}

                >
                </Task>
                <div ref={this.taskCont}>
                    hehehe
                </div>

            </ListGroupItem>
        )

        return (
            <ListGroup>
                {tasksList}
            </ListGroup>
        )
    }

    taskCont = task => {
        this.task = task;
        console.log(';;;;', task)
        console.log('task -', window.getComputedStyle(task).width)
        // setInterval(() => {task.setState({
        //
        // })}, 500)
    }



}

export default accordion(TasksList)