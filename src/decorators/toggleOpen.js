import React from 'react'

export default (OrigComponent) => class DecoratedComponent extends React.Component {
    render () {
        return <OrigComponent {...this.props} {...this.state} />
    }
}