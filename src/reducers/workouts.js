import {
    ADD_WORKOUT, WORKOUT_TEMPLATE_ADD_EXERCISE, WORKOUT_TEMPLATE_ADD_SET, WORKOUT_TEMPLATE_EDIT_SET,
    WORKOUT_TEMPLATE_REMOVE_EXERCISE, WORKOUT_TEMPLATE_REMOVE_SET,
    DELETE_WORKOUT,
    EDIT_WORKOUT,
    GET_WORKOUTS,
    TOGGLE_CREATING_WORKOUT
} from '../actions';

const workoutReducer = (state = {}, action) => {
    switch (action.type) {
        case EDIT_WORKOUT:
            if (state.id !== action.data.id) {
                return state;
            }

            return action.data;

        default:
            return state;
    }
};

const workoutsReducer = (state = [], action) => {
    switch (action.type) {
        case GET_WORKOUTS:
            return action.data;

        case ADD_WORKOUT:
            return [...state, action.data];

        case DELETE_WORKOUT:
            const index = state.findIndex(entity => entity.id === action.data.id);

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];

        case EDIT_WORKOUT:
            return state.map(entity => workoutReducer(entity, action));

        default:
            return state;
    }
};

const templateReducer = (state = {}, action) => {
    switch (action.type) {
        case WORKOUT_TEMPLATE_ADD_EXERCISE:
        case WORKOUT_TEMPLATE_REMOVE_EXERCISE:
        case WORKOUT_TEMPLATE_ADD_SET:
        case WORKOUT_TEMPLATE_EDIT_SET:
        case WORKOUT_TEMPLATE_REMOVE_SET:
            return {...state, exercises: templateExercisesReducer(state.exercises, action)};

        default:
            return state;
    }
};

const templateExercisesReducer = (state = [], action) => {
    switch (action.type) {
        case WORKOUT_TEMPLATE_ADD_EXERCISE:
            return [...state, action.exercise];

        case WORKOUT_TEMPLATE_REMOVE_EXERCISE:
            const index = state.findIndex(entity => entity.id === action.exercise.id);

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];

        case WORKOUT_TEMPLATE_ADD_SET:
        case WORKOUT_TEMPLATE_EDIT_SET:
        case WORKOUT_TEMPLATE_REMOVE_SET:
            return state.map(ex => ex.id === action.exerciseId ? templateExerciseReducer(ex, action) : ex);

        default:
            return state;
    }
};

const templateExerciseReducer = (state = {}, action) => {
    switch (action.type) {
        case WORKOUT_TEMPLATE_ADD_SET:
        case WORKOUT_TEMPLATE_EDIT_SET:
        case WORKOUT_TEMPLATE_REMOVE_SET:
            return {...state, sets: templateExerciseSetReducer(state.sets, action)};

        default:
            return state;
    }
};


const templateExerciseSetReducer = (state = [], action) => {
    switch (action.type) {
        case WORKOUT_TEMPLATE_ADD_SET:
            return [...state, action.set];

        case WORKOUT_TEMPLATE_EDIT_SET:
            return state.map(entity => entity.index === action.set.index ? action.set : entity);

        case WORKOUT_TEMPLATE_REMOVE_SET:
            const index = state.findIndex(entity => entity.index === action.set.index);

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];

        default:
            return state;
    }
};

export default (state = {workouts: [], creating: false, template: {exercises: []}}, action) => {
    switch (action.type) {
        case GET_WORKOUTS:
        case ADD_WORKOUT:
        case DELETE_WORKOUT:
        case EDIT_WORKOUT:
            return {...state, workouts: workoutsReducer(state, action)};

        case TOGGLE_CREATING_WORKOUT:
            return {...state, creating: action.creating};

        case WORKOUT_TEMPLATE_ADD_EXERCISE:
        case WORKOUT_TEMPLATE_REMOVE_EXERCISE:
        case WORKOUT_TEMPLATE_ADD_SET:
        case WORKOUT_TEMPLATE_EDIT_SET:
        case WORKOUT_TEMPLATE_REMOVE_SET:
            return {...state, template: templateReducer(state.template, action)};

        default:
            return state;
    }
};