export const GET_PROGRAMS = 'GET_PROGRAMS';
export const ADD_PROGRAM = 'ADD_PROGRAM';
export const DELETE_PROGRAM = 'DELETE_PROGRAM';
export const EDIT_PROGRAM = 'EDIT_PROGRAM';
export const TOGGLE_CREATING_PROGRAM = 'TOGGLE_CREATING_PROGRAM';

export const getPrograms = () => ({
    type: GET_PROGRAMS,
    request: {
        method: 'get',
        url: '/programs'
    }
});

export const addProgram = (program) => dispatch => {
    dispatch(toggleCreatingProgram(false));
    dispatch({
        type: ADD_PROGRAM,
        request: {
            method: 'post',
            url: '/programs',
            body: {...program}
        }
    });
};

export const deleteProgram = (id) => ({
    type: DELETE_PROGRAM,
    request: {
        method: 'delete',
        url: `/programs/${id}`
    }
});

export const editProgram = (id, program) => ({
    type: EDIT_PROGRAM,
    request: {
        method: 'put',
        url: `/programs/${id}`,
        body: {...program}
    }
});

export const toggleCreatingProgram = (creating) => {
    return {
        type: TOGGLE_CREATING_PROGRAM,
        creating
    }
};