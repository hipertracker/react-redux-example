import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App';
import * as reducers from './reducers';
import { logger } from './middleware'

const storeWithMiddleware = applyMiddleware(logger)(createStore);
const reducer = combineReducers(reducers);
const store = storeWithMiddleware(reducer);

React.render(
    <Provider store={store}>
        {() => <App />}
    </Provider>,
    document.getElementById('root')
);
