import React, {PureComponent} from 'react'
import {connect} from 'react-redux';
import CommentList from './CommentList';
import PropTypes from 'prop-types';
import {handleDelete} from '../AC'
// import ToggleOpen from '../decorators/toggleOpen';


class Task extends PureComponent {

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
                    <button onClick={this.handleDelete}>
                        Delete Task
                    </button>
                </h4>
                {taskBody}
            </div>
        )
    }

    handleDelete = () => {
        console.log('----', "deleting task!", this.props.task.id)
        this.props.handleDelete(this.props.task.id)
    }
}

export default connect(null, {handleDelete})(Task)