import React from 'react'

export default (OrigComponent) => class Accordeon extends React.Component {
    state = {
        openTaskId : null
    }
    
    toggleOpenItem = openTaskId => ev => this.setState({
        openTaskId: openTaskId === this.state.openTaskId ? null : openTaskId})

    

    render () {
        return <OrigComponent {...this.props} {...this.state} toggleOpenItem={this.toggleOpenItem}/>
    }
}