import {
    GET_DAYS,
    ADD_DAY,
    DELETE_DAY,
    EDIT_DAY,
    TOGGLE_CREATING_DAY,
    DAY_TEMPLATE_ADD_EXERCISE,
    DAY_TEMPLATE_REMOVE_EXERCISE,
    DAY_TEMPLATE_ADD_SET,
    DAY_TEMPLATE_EDIT_SET,
    DAY_TEMPLATE_REMOVE_SET
} from '../actions';

const dayReducer = (state = {}, action) => {
    switch (action.type) {
        case EDIT_DAY:
            if (state.id !== action.data.id) {
                return state;
            }

            return action.data;

        default:
            return state;
    }
};

const daysReducer = (state = [], action) => {
    switch (action.type) {
        case GET_DAYS:
            return action.data;

        case ADD_DAY:
            return [...state, action.data];

        case DELETE_DAY:
            const index = state.findIndex(entity => entity.id === action.data.id);

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];

        case EDIT_DAY:
            return state.map(entity => dayReducer(entity, action));

        default:
            return state;
    }
};

const templateReducer = (state = {}, action) => {
    switch (action.type) {
        case DAY_TEMPLATE_ADD_EXERCISE:
        case DAY_TEMPLATE_REMOVE_EXERCISE:
        case DAY_TEMPLATE_ADD_SET:
        case DAY_TEMPLATE_EDIT_SET:
        case DAY_TEMPLATE_REMOVE_SET:
            return {...state, exercises: templateExercisesReducer(state.exercises, action)};

        default:
            return state;
    }
};

const templateExercisesReducer = (state = [], action) => {
    switch (action.type) {
        case DAY_TEMPLATE_ADD_EXERCISE:
            return [...state, action.exercise];

        case DAY_TEMPLATE_REMOVE_EXERCISE:
            const index = state.findIndex(entity => entity.id === action.exercise.id);

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];

        case DAY_TEMPLATE_ADD_SET:
        case DAY_TEMPLATE_EDIT_SET:
        case DAY_TEMPLATE_REMOVE_SET:
            return state.map(ex => ex.id === action.exerciseId ? templateExerciseReducer(ex, action) : ex);

        default:
            return state;
    }
};

const templateExerciseReducer = (state = {}, action) => {
    switch (action.type) {
        case DAY_TEMPLATE_ADD_SET:
        case DAY_TEMPLATE_EDIT_SET:
        case DAY_TEMPLATE_REMOVE_SET:
            return {...state, sets: templateExerciseSetReducer(state.sets, action)};

        default:
            return state;
    }
};


const templateExerciseSetReducer = (state = [], action) => {
    switch (action.type) {
        case DAY_TEMPLATE_ADD_SET:
            return [...state, action.set];

        case DAY_TEMPLATE_EDIT_SET:
            return state.map(entity => entity.index === action.set.index ? action.set : entity);

        case DAY_TEMPLATE_REMOVE_SET:
            const index = state.findIndex(entity => entity.index === action.set.index);

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];

        default:
            return state;
    }
};

export default (state = {days: [], creating: false, template: {exercises: []}}, action) => {
    switch (action.type) {
        case GET_DAYS:
        case ADD_DAY:
        case DELETE_DAY:
        case EDIT_DAY:
            return {...state, days: daysReducer(state.days, action)};

        case TOGGLE_CREATING_DAY:
            return {...state, creating: action.creating};

        case DAY_TEMPLATE_ADD_EXERCISE:
        case DAY_TEMPLATE_REMOVE_EXERCISE:
        case DAY_TEMPLATE_ADD_SET:
        case DAY_TEMPLATE_EDIT_SET:
        case DAY_TEMPLATE_REMOVE_SET:
            return {...state, template: templateReducer(state.template, action)};

        default:
            return state;
    }
};