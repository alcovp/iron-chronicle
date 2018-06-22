import {
    addWorkout,
    toggleCreatingWorkout,
    workoutTemplateAddExercise,
    workoutTemplateRemoveExercise
} from "../../actions";
import {connect} from "react-redux";
import WorkoutEdit from "../../pages/workouts/WorkoutEdit";

function mapStateToProps(state) {
    return {
        ...state.workouts.template,
        exercisesBriefly: state.dictionary.exercises
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onCreatingToggle: creating => dispatch(toggleCreatingWorkout(creating)),
        onCreate: workout => dispatch(addWorkout(workout)),
        onTemplateAddExercise: workout => dispatch(workoutTemplateAddExercise(workout)),
        onTemplateRemoveExercise: workout => dispatch(workoutTemplateRemoveExercise(workout))
    };
}

const WorkoutEditContainer = connect(mapStateToProps, mapDispatchToProps)(WorkoutEdit);

export default WorkoutEditContainer;