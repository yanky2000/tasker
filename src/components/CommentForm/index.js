import React, {Component} from 'react';
import './commentForm.css';

class CommentForm extends Component {

    state = {
        user: '',
        text: ''
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                user:
                <input
                    type="text"
                    value={this.state.user}
                    onChange={this.handleChange('user')}
                    className={this.getClassName('user')}
                />

                text:
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.handleChange('text')}
                    className={this.getClassName('text')}
                />
                <input
                    type="submit"
                    value='submit'
                    disabled={!this.isValidForm()}
                />
            </form>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.setState({
            user: '',
            text: ''
        })
    }

    isValidForm = () => {
        return ['user', 'text'].every(type => this.isValidField(type))
    }

    isValidField = type => {
        return this.state[type].length > this.inputLimits[type].min
    }

    handleChange = type => ev => {
        const {value} = ev.target;
        if (value.length > this.inputLimits[type].max) return;
        this.setState({
            [type]: value
        })
    }

    getClassName = type => {
        return this.isValidField(type) ? '' : 'error'
    }

    inputLimits = {
        user: {
            min: 5,
            max: 20
        },
        text: {
            min: 10,
            max: 25
        }

    }


}

export default CommentForm