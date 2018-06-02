import React, {Component} from 'react'
import Task from './Task'
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import accordion from '../decorators/accordion';
import PropTypes from 'prop-types';


class TasksList extends Component {

    static propTypes = {
        dayRecord: PropTypes.object,
        // tasks: PropTypes.array.isRequired,
        // from accordion
        openTaskId: PropTypes.number,
        toggleOpenItem: PropTypes.func.isRequired
    };

    render() {
        const {dayRecord: {date, tasks, openTaskId}, toggleOpenItemMemoized} = this.props
        const tasksList = tasks.map(task =>
            <ListGroupItem key={task.title}>
                <Task
                    date={date}
                    task={task}
                    isOpen={task.id === openTaskId}
                    toggleOpenItem={toggleOpenItemMemoized(task.id)}
                >
                </Task>
                {/*<div ref={this.taskCont}>*/}
                {/*hehehe*/}
                {/*</div>*/}

            </ListGroupItem>
        )

        return (
            <ListGroup>
                {tasksList}
            </ListGroup>
        )
    };


}

export default accordion(TasksList)