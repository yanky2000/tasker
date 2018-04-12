import React, { Component } from 'react'
import Task from './Task'
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class TasksList extends Component {
    render() {
        const {tasks} = this.props
        const tasksList = tasks.map(task => 
            <ListGroupItem key={task.title}>
                <h4>{task.title}</h4>
                <Task task={task}></Task>
            </ListGroupItem>
            )

        return (
            <ListGroup>
                {tasksList}
            </ListGroup>

        )
    }
}

export default TasksList