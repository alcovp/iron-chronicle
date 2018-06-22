import React from 'react';
import './Root.css';
import Header from "./components/Header";
import Main from "./components/Main";
import {Provider} from "react-redux";
import {ConnectedRouter} from 'connected-react-router'

const Root = ({store, history}) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className={'app'}>
                <Header/>
                <Main/>
            </div>
        </ConnectedRouter>
    </Provider>
);

export default Root;
