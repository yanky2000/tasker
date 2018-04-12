import React, { Component } from 'react'
import CommentList from './CommentList';
import PropTypes from 'prop-types'
import accordeon from '../decorators/accordeon'

class Task extends Component {
    static propTypes = {
        task: PropTypes.object.isRequired
    }

    render() {
        console.log('----','render')
        const {task, toggleOpen, openTaskId} = this.props
        const commentsBody = openTaskId==task.id ? <CommentList comments={task.comments}/> : null
        const taskBody = openTaskId==task.id && (
            <div>
                <p>{task.description}</p>
                <button onClick={toggleOpen}>{this.props.isOpen ? 'hide comments' : 'show comments'}</button>
                {commentsBody}
            </div>)

        return (
            <div>
                <h4>{task.title}
                    <button onClick={toggleOpen(task.id)}>open task</button>
                </h4>
                {taskBody}
            </div>
        )
    }

    getBody() {}
}

export default accordeon(Task);