import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import {deleteTask} from "../AC";

// import ToggleOpen from '../decorators/toggleOpen';


class Task extends Component {

    static propTypes = {
        task: PropTypes.object.isRequired,
        deleteTask: PropTypes.func,
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
                <CommentList comments={task.comments}/>
            </div>)

        return (
            <div>
                <h4>{task.title}
                    &nbsp;
                    <button onClick={toggleOpenItem}>
                        {(isOpen) ? 'close task' : 'open task'}
                    </button>

                    <button onClick={this.handleDelete}>
                        Delete Task
                    </button>

                </h4>
                {taskBody}
            </div>
        )
    }

    handleDelete = () => {
        const {date, task: {id}} = this.props
        this.props.deleteTask({date, taskId:id})
    }
}

export default connect(null, {deleteTask})(Task)

