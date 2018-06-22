import {createStore, compose, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createBrowserHistory} from 'history';
import {connectRouter, routerMiddleware} from 'connected-react-router';

import apiMiddleware from '../middleware/api';

import reducer from '../reducers';

export const history = createBrowserHistory();

const store = createStore(
    connectRouter(history)(reducer),
    compose(
        applyMiddleware(
            routerMiddleware(history),
            apiMiddleware('http://localhost:3000/api'),
            thunk,
            promise,
            logger
        )
    )
);

export default store;