import {connect} from 'react-redux';

import {dayTemplateAddSet, dayTemplateEditSet, dayTemplateRemoveSet} from '../../actions/index';
import DayOrWorkoutExerciseEdit from "../../components/DayOrWorkoutExerciseEdit";

function mapStateToProps(state, ownProps) {
    return {
        ...state.days.template.exercises.find(ex => ex.id === ownProps.id)
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onTemplateAddSet: set => dispatch(dayTemplateAddSet(set, ownProps.id)),
        onTemplateEditSet: set => dispatch(dayTemplateEditSet(set, ownProps.id)),
        onTemplateRemoveSet: set => dispatch(dayTemplateRemoveSet(set, ownProps.id))
    };
}

const DayExerciseEditContainer = connect(mapStateToProps, mapDispatchToProps)(DayOrWorkoutExerciseEdit);

export default DayExerciseEditContainer;