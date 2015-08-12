import React, { Component, PropTypes } from 'react';

export default class TodoItem extends Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
        onDeleteClick: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);
    }

    render() {
        console.log('@@@@', this.props);
        return (
            <li>
                {this.props.value}
                &nbsp;
                <a href onClick={this._onClick}>[x]</a>
            </li>
        );
    }

    _onClick(e) {
        e.preventDefault();
        this.props.onDeleteClick(this.props.index);
    }
}
