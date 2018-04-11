import React, { Component } from 'react'
import CommentList from './CommentList';

class Task extends Component {
    render() {
        const {task} = this.props

        return (
            <div>
                <p>{task.description}</p>
                <CommentList comments={task.comments}/>
            </div>
        )
    }

    getBody() {}
}

export default Task;