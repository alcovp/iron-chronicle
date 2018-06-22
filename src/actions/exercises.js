export const GET_EXERCISES = 'GET_EXERCISES';
export const ADD_EXERCISE = 'ADD_EXERCISE';
export const DELETE_EXERCISE = 'DELETE_EXERCISE';
export const EDIT_EXERCISE = 'EDIT_EXERCISE';
export const TOGGLE_CREATING_EXERCISE = 'TOGGLE_CREATING_EXERCISE';

export const getExercises = () => ({
    type: GET_EXERCISES,
    request: {
        method: 'get',
        url: '/exercises'
    }
});

export const addExercise = (exercise) => dispatch => {
    dispatch(toggleCreatingExercise(false));
    dispatch({
        type: ADD_EXERCISE,
        request: {
            method: 'post',
            url: '/exercises',
            body: {...exercise}
        }
    });
};

export const deleteExercise = (id) => ({
    type: DELETE_EXERCISE,
    request: {
        method: 'delete',
        url: `/exercises/${id}`
    }
});

export const editExercise = (id, exercise) => ({
    type: EDIT_EXERCISE,
    request: {
        method: 'put',
        url: `/exercises/${id}`,
        body: {...exercise}
    }
});

export const toggleCreatingExercise = (creating) => {
    return {
        type: TOGGLE_CREATING_EXERCISE,
        creating
    }
};