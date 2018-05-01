import React, {Component} from 'react'
import CommentList from './CommentList';
import PropTypes from 'prop-types';
import ToggleOpen from '../decorators/toggleOpen';


class Task extends Component {

    static propTypes = {
        task: PropTypes.object.isRequired,
        //from accordion
        openTaskId: PropTypes.number,
        toggleOpenItem: PropTypes.func
    };


    render() {
        const {task, openTaskId, toggleOpenItem, toggleOpen, isOpen} = this.props;
        console.log('----', 'Task rendered', task.id);

        const commentsBody = isOpen && <CommentList comments={task.comments}/>

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
                <h4>{task.title}
                &nbsp;
                    <button onClick={toggleOpenItem}>
                        {(openTaskId === task.id) ? 'close task' : 'open task'}
                    </button>
                </h4>
                {taskBody}
            </div>
        )
    }
}

export default ToggleOpen(Task)