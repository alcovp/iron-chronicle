import {
    GET_PROGRAMS,
    ADD_PROGRAM,
    DELETE_PROGRAM,
    EDIT_PROGRAM,
    TOGGLE_CREATING_PROGRAM
} from '../actions';

const programReducer = (state = {}, action) => {
    switch (action.type) {
        case EDIT_PROGRAM:
            if (state.id !== action.data.id) {
                return state;
            }

            return action.data;

        default:
            return state;
    }
};

const programsReducer = (state = [], action) => {
    switch (action.type) {
        case GET_PROGRAMS:
            return action.data;

        case ADD_PROGRAM:
            return [...state, action.data];

        case DELETE_PROGRAM:
            const index = state.findIndex(entity => entity.id === action.data.id);

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];

        case EDIT_PROGRAM:
            return state.map(entity => programReducer(entity, action));

        default:
            return state;
    }
};

export default (state = {programs: [], creating: false}, action) => {
    switch (action.type) {
        case GET_PROGRAMS:
            return {...state, programs: programsReducer(state.programs, action)};

        case ADD_PROGRAM:
            return {...state, programs: programsReducer(state.programs, action)};

        case DELETE_PROGRAM:
            return {...state, programs: programsReducer(state.programs, action)};

        case EDIT_PROGRAM:
            return {...state, programs: programsReducer(state.programs, action)};

        case TOGGLE_CREATING_PROGRAM:
            return {...state, creating: action.creating};

        default:
            return state;
    }
};