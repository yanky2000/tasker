import React, {Component} from 'react'
import Comment from './Comment';
import CommentForm from './CommentForm/';
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    render() {
        const {comments, isOpen, toggleOpen} = this.props
        const commentsBody = (comments.length > 0)
                    ? comments.map((comment, index) =>
                        <Comment key={index} comment={comment}></Comment>)
                    : 'no comments yet'

        return (

            <div>
                <button onClick={toggleOpen}>
                    {isOpen
                        ? 'hide comments'
                        : 'show comments'
                    }
                </button>
                <ul>
                    {isOpen && commentsBody}
                </ul>
                <CommentForm />
            </div>

        )
    }
}

export default toggleOpen(CommentList)