import React, { Component, findDOMNode, PropTypes } from 'react';

export default class Child extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
                <input ref="input" type="text" placeholder="Type…"/>
                <button onClick={this.handleClick}>add</button>
            </div>
        )
    }

    handleClick() {
        const node = findDOMNode(this.refs.input);
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }
}

Child.propTypes = {
    onAddClick: PropTypes.func.isRequired
};
