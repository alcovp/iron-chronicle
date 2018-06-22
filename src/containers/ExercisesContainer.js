import {connect} from 'react-redux';

import {addExercise, toggleCreatingExercise} from '../actions';
import Exercises from '../pages/exercises/Exercises';

function mapStateToProps(state) {
    return {...state.exercises};
}

function mapDispatchToProps(dispatch) {
    return {
        onCreatingToggle: creating => dispatch(toggleCreatingExercise(creating)),
        onCreate: exercise => dispatch(addExercise(exercise))
    };
}

const ExercisesContainer = connect(mapStateToProps, mapDispatchToProps)(Exercises);

export default ExercisesContainer;