import React from 'react'

export default (OrigComponent) => class Accordeon extends React.Component {
    state = {
        openTaskId : null
    }
    
    toggleOpen = openTaskId => ev => this.setState({
        openTaskId: openTaskId === this.state.openTaskId ? null : openTaskId})

    

    render () {
        return <OrigComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen}/>
    }
}