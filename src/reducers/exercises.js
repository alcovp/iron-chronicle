import {
    GET_EXERCISES,
    ADD_EXERCISE,
    DELETE_EXERCISE,
    EDIT_EXERCISE,
    TOGGLE_CREATING_EXERCISE
} from '../actions';

const exerciseReducer = (state = {}, action) => {
    switch (action.type) {
        case EDIT_EXERCISE:
            if (state.id !== action.data.id) {
                return state;
            }

            return action.data;

        default:
            return state;
    }
};

const exercisesReducer = (state = [], action) => {
    switch (action.type) {
        case GET_EXERCISES:
            return action.data;

        case ADD_EXERCISE:
            return [...state, action.data];

        case DELETE_EXERCISE:
            const index = state.findIndex(entity => entity.id === action.data.id);

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];

        case EDIT_EXERCISE:
            return state.map(entity => exerciseReducer(entity, action));

        default:
            return state;
    }
};

export default (state = {exercises: [], creating: false}, action) => {
    switch (action.type) {
        case GET_EXERCISES:
            return {...state, exercises: exercisesReducer(state.exercises, action)};

        case ADD_EXERCISE:
            return {...state, exercises: exercisesReducer(state.exercises, action)};

        case DELETE_EXERCISE:
            return {...state, exercises: exercisesReducer(state.exercises, action)};

        case EDIT_EXERCISE:
            return {...state, exercises: exercisesReducer(state.exercises, action)};

        case TOGGLE_CREATING_EXERCISE:
            return {...state, creating: action.creating};

        default:
            return state;
    }
};