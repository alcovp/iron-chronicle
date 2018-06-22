import {combineReducers} from 'redux';

import workouts from './workouts';
import days from './days';
import exercises from './exercises';
import programs from './programs';
import dictionary from './dictionary';
import settings from './settings';

const reducer = combineReducers({
    workouts,
    days,
    exercises,
    programs,
    dictionary,
    settings
});

export default reducer;