import {
    GET_DAYS_BRIEFLY,
    GET_PROGRAMS_BRIEFLY,
    GET_EXERCISES_BRIEFLY
} from '../actions';

export default (state = {days: [], programs: [], exercises: []}, action) => {
    switch (action.type) {
        case GET_DAYS_BRIEFLY:
            return {...state, days: action.data};

        case GET_PROGRAMS_BRIEFLY:
            return {...state, programs: action.data};

        case GET_EXERCISES_BRIEFLY:
            return {...state, exercises: action.data};


        default:
            return state;
    }
};