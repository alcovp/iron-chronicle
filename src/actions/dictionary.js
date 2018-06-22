export const GET_DAYS_BRIEFLY = 'GET_DAYS_BRIEFLY';
export const GET_PROGRAMS_BRIEFLY = 'GET_PROGRAMS_BRIEFLY';
export const GET_EXERCISES_BRIEFLY = 'GET_EXERCISES_BRIEFLY';

export const getDaysBriefly = () => ({
    type: GET_DAYS_BRIEFLY,
    request: {
        method: 'get',
        url: '/days-briefly'
    }
});
export const getProgramsBriefly = () => ({
    type: GET_PROGRAMS_BRIEFLY,
    request: {
        method: 'get',
        url: '/programs-briefly'
    }
});
export const getExercisesBriefly = () => ({
    type: GET_EXERCISES_BRIEFLY,
    request: {
        method: 'get',
        url: '/exercises-briefly'
    }
});