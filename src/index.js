import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Root from "./Root";
import store, {history} from "./store";

import {
    getDays,
    getDaysBriefly,
    getExercises,
    getExercisesBriefly,
    getPrograms,
    getProgramsBriefly,
    getSettings,
    getWorkouts
} from './actions';

store.dispatch(getDaysBriefly());
store.dispatch(getExercisesBriefly());
store.dispatch(getProgramsBriefly());
store.dispatch(getSettings());
store.dispatch(getExercises());
store.dispatch(getPrograms());
store.dispatch(getDays());
store.dispatch(getWorkouts());

ReactDOM.render(
    <Root store={store} history={history}/>, document.getElementById('root'));
registerServiceWorker();
