export const GET_SETTINGS = 'GET_SETTINGS';
export const TOGGLE_FOLLOW_PROGRAM = 'TOGGLE_FOLLOW_PROGRAM';
export const SELECT_FOLLOWING_PROGRAM = 'SELECT_FOLLOWING_PROGRAM';

export const getSettings = () => ({
    type: GET_SETTINGS,
    request: {
        method: 'get',
        url: '/settings'
    }
});

export const toggleFollowProgram = (enabled) => ({
    type: TOGGLE_FOLLOW_PROGRAM,
    request: {
        method: 'patch',
        url: `/settings/followProgram`,
        body: {value: enabled}
    }
});

export const selectFollowedProgram = (programId) => ({
    type: SELECT_FOLLOWING_PROGRAM,
    request: {
        method: 'patch',
        url: `/settings/followedProgramId`,
        body: {value: programId}
    }
});