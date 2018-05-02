import React from 'react';

export default (OrigComponent) => {
    return class Accordeon extends React.Component {
        state = {
            openTaskId: null
        }

        toggleOpenItem = openItemId => en => this.setState({
            openTaskId: openItemId === this.state.openTaskId ? null : openItemId
        })

        togglersMap = new Map()

        toggleOpenItemMemoized = (openItemId) => {
            if (this.togglersMap.get(openItemId)) return this.togglersMap.get(openItemId);
            const toggler = this.toggleOpenItem(openItemId);
            this.togglersMap.set(openItemId, toggler);
            return toggler

        }


        render() {
            return <OrigComponent
                {...this.props}
                {...this.state}
                toggleOpenItem={this.toggleOpenItem}
                toggleOpenItemMemoized={this.toggleOpenItemMemoized}

            />
        }
    };
}