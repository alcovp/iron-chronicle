import {connect} from 'react-redux';

import {workoutTemplateAddSet, workoutTemplateEditSet, workoutTemplateRemoveSet} from '../../actions/index';
import DayOrWorkoutExerciseEdit from "../../components/DayOrWorkoutExerciseEdit";

function mapStateToProps(state, ownProps) {
    return {
        ...state.workouts.template.exercises.find(ex => ex.id === ownProps.id)
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onTemplateAddSet: set => dispatch(workoutTemplateAddSet(set, ownProps.id)),
        onTemplateEditSet: set => dispatch(workoutTemplateEditSet(set, ownProps.id)),
        onTemplateRemoveSet: set => dispatch(workoutTemplateRemoveSet(set, ownProps.id))
    };
}

const WorkoutExerciseEditContainer = connect(mapStateToProps, mapDispatchToProps)(DayOrWorkoutExerciseEdit);

export default WorkoutExerciseEditContainer;