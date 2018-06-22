import {GET_SETTINGS, SELECT_FOLLOWING_PROGRAM, TOGGLE_FOLLOW_PROGRAM} from '../actions';

export default (state = {followProgram: false, followedProgramId: 0}, action) => {
    switch (action.type) {
        case GET_SETTINGS:
        case TOGGLE_FOLLOW_PROGRAM:
        case SELECT_FOLLOWING_PROGRAM:
            return {...state, ...action.data};

        default:
            return state;
    }
};