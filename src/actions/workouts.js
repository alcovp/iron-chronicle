export const GET_WORKOUTS = 'GET_WORKOUTS';
export const ADD_WORKOUT = 'ADD_WORKOUT';
export const DELETE_WORKOUT = 'DELETE_WORKOUT';
export const EDIT_WORKOUT = 'EDIT_WORKOUT';
export const TOGGLE_CREATING_WORKOUT = 'TOGGLE_CREATING_WORKOUT';
export const WORKOUT_TEMPLATE_ADD_EXERCISE = 'WORKOUT_TEMPLATE_ADD_EXERCISE';
export const WORKOUT_TEMPLATE_REMOVE_EXERCISE = 'WORKOUT_TEMPLATE_REMOVE_EXERCISE';
export const WORKOUT_TEMPLATE_ADD_SET = 'WORKOUT_TEMPLATE_ADD_SET';
export const WORKOUT_TEMPLATE_EDIT_SET = 'WORKOUT_TEMPLATE_EDIT_SET';
export const WORKOUT_TEMPLATE_REMOVE_SET = 'WORKOUT_TEMPLATE_REMOVE_SET';

export const getWorkouts = () => ({
    type: GET_WORKOUTS,
    request: {
        method: 'get',
        url: '/workouts'
    }
});

export const addWorkout = (workout) => dispatch => {
    dispatch(toggleCreatingWorkout(false));
    dispatch({
        type: ADD_WORKOUT,
        request: {
            method: 'post',
            url: '/workouts',
            body: {...workout}
        }
    });
};

export const deleteWorkout = (id) => ({
    type: DELETE_WORKOUT,
    request: {
        method: 'delete',
        url: `/workouts/${id}`
    }
});

export const editWorkout = (id, workout) => ({
    type: EDIT_WORKOUT,
    request: {
        method: 'put',
        url: `/workouts/${id}`,
        body: {...workout}
    }
});

export const toggleCreatingWorkout = (creating) => {
    return {
        type: TOGGLE_CREATING_WORKOUT,
        creating
    }
};

export const workoutTemplateAddExercise = (exercise) => {
    return {
        type: WORKOUT_TEMPLATE_ADD_EXERCISE,
        exercise
    }
};

export const workoutTemplateRemoveExercise = (exercise) => {
    return {
        type: WORKOUT_TEMPLATE_REMOVE_EXERCISE,
        exercise
    }
};

export const workoutTemplateAddSet = (set, exerciseId) => {
    return {
        type: WORKOUT_TEMPLATE_ADD_SET,
        set,
        exerciseId
    }
};

export const workoutTemplateEditSet = (set, exerciseId) => {
    return {
        type: WORKOUT_TEMPLATE_EDIT_SET,
        set,
        exerciseId
    }
};

export const workoutTemplateRemoveSet = (set, exerciseId) => {
    return {
        type: WORKOUT_TEMPLATE_REMOVE_SET,
        set,
        exerciseId
    }
};