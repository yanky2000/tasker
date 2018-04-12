import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    render() {
        const {comments} = this.props
        const commentBody = comments.length ? comments.map((comment, index) => <Comment key={index} comment={comment}></Comment>) : "no comments yet"

        return (
            <ul>
                {commentBody}
            </ul>

        )
    }
}

export default CommentList