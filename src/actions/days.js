export const GET_DAYS = 'GET_DAYS';
export const ADD_DAY = 'ADD_DAY';
export const DELETE_DAY = 'DELETE_DAY';
export const EDIT_DAY = 'EDIT_DAY';
export const TOGGLE_CREATING_DAY = 'TOGGLE_CREATING_DAY';
export const DAY_TEMPLATE_ADD_EXERCISE = 'DAY_TEMPLATE_ADD_EXERCISE';
export const DAY_TEMPLATE_REMOVE_EXERCISE = 'DAY_TEMPLATE_REMOVE_EXERCISE';
export const DAY_TEMPLATE_ADD_SET = 'DAY_TEMPLATE_ADD_SET';
export const DAY_TEMPLATE_EDIT_SET = 'DAY_TEMPLATE_EDIT_SET';
export const DAY_TEMPLATE_REMOVE_SET = 'DAY_TEMPLATE_REMOVE_SET';

export const getDays = () => ({
    type: GET_DAYS,
    request: {
        method: 'get',
        url: '/days'
    }
});

export const addDay = (day) => dispatch => {
    dispatch(toggleCreatingDay(false));
    dispatch({
        type: ADD_DAY,
        request: {
            method: 'post',
            url: '/days',
            body: {...day}
        }
    });
};

export const deleteDay = (id) => ({
    type: DELETE_DAY,
    request: {
        method: 'delete',
        url: `/days/${id}`
    }
});

export const editDay = (id, day) => ({
    type: EDIT_DAY,
    request: {
        method: 'put',
        url: `/days/${id}`,
        body: {...day}
    }
});

export const toggleCreatingDay = (creating) => {
    return {
        type: TOGGLE_CREATING_DAY,
        creating
    }
};

export const dayTemplateAddExercise = (exercise) => {
    return {
        type: DAY_TEMPLATE_ADD_EXERCISE,
        exercise
    }
};

export const dayTemplateRemoveExercise = (exercise) => {
    return {
        type: DAY_TEMPLATE_REMOVE_EXERCISE,
        exercise
    }
};

export const dayTemplateAddSet = (set, exerciseId) => {
    return {
        type: DAY_TEMPLATE_ADD_SET,
        set,
        exerciseId
    }
};

export const dayTemplateEditSet = (set, exerciseId) => {
    return {
        type: DAY_TEMPLATE_EDIT_SET,
        set,
        exerciseId
    }
};

export const dayTemplateRemoveSet = (set, exerciseId) => {
    return {
        type: DAY_TEMPLATE_REMOVE_SET,
        set,
        exerciseId
    }
};