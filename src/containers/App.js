import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { createSelector, createSelectorCreator } from 'reselect';

import { addTodo, removeTodo } from '../actions';
import Child from '../components/Child';
import TodoItems from '../components/TodoItems';

class App extends Component {
    constructor(props) {
        super(props);
        this._add = this._add.bind(this);
        this._del = this._del.bind(this);
    }

    render() {
        const {todos} = this.props;
        return (
            <div>
                <Child onAddClick={this._add}/>
                <TodoItems todos={todos} onDeleteClick={this._del}/>
            </div>
        )
    }
    _add(text) {
        this.props.dispatch(addTodo(text));
    }

    _del(x) {
        this.props.dispatch(removeTodo(x));
    }
}


const immutableCreateSelector = createSelectorCreator(Immutable.is);

const selectors = immutableCreateSelector(
    [state => state],
        value => value
);

// Wrap the component to inject dispatch and state into it
export default connect(selectors)(App);
