import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';

export default class TodoItems extends Component {
    static propTypes = {
        todos: PropTypes.object.isRequired // object instead of array because todos is Immutable.List()
    };

    render() {
        const {todos, ...rest} = this.props;
        const items = todos.map((value, i) => <TodoItem key={i} index={i} value={value} {...rest}/>)
        return <ul>{items}</ul>;
    }

}

