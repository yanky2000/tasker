import React, {Component} from 'react'
import CommentList from './CommentList';
import PropTypes from 'prop-types';
// import ToggleOpen from '../decorators/toggleOpen';


class Task extends Component {

    static propTypes = {
        task: PropTypes.object.isRequired,
        //from accordion
        isOpen: PropTypes.bool,
        toggleOpenItem: PropTypes.func
    };


    render() {
        const {task, toggleOpenItem, isOpen} = this.props;
        console.log('----', 'Task rendered', task.id);

        const taskBody = isOpen && (
            <div>
                <p>{task.description}</p>
                <CommentList comments={task.comments} />
            </div>)

        return (
            <div>
                <h4>{task.title}
                &nbsp;
                    <button onClick={toggleOpenItem}>
                        {(isOpen) ? 'close task' : 'open task'}
                    </button>
                </h4>
                {taskBody}
            </div>
        )
    }
}

export default Task