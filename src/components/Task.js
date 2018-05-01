import React, {Component} from 'react'
import CommentList from './CommentList';
import PropTypes from 'prop-types'


class Task extends Component {

    static propTypes = {
        task: PropTypes.object.isRequired,
        //from accordion
        openTaskId: PropTypes.number,
        toggleOpen: PropTypes.func
    };

    render() {
        const {task, openTaskId, toggleOpen} = this.props;
        console.log('----', 'Task rendered', task.id);

        const commentsBody = openTaskId === task.id
            ? <CommentList comments={task.comments}/>
            : null;

        const taskBody = openTaskId === task.id && (
            <div>
                <p>{task.description}</p>
                <button onClick={toggleOpen}>
                    {this.props.isOpen
                        ? 'hide comments'
                        : 'show comments'
                    }
                </button>
                {commentsBody}
            </div>);

        return (
            <div>
                <h4>{task.title}</h4>
                <button onClick={toggleOpen(task.id)}>{(openTaskId === task.id) ? 'close task' : 'open task'}</button>
                {taskBody}
            </div>
        )
    }
}

export default Task