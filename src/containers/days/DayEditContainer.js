import {connect} from 'react-redux';

import {dayTemplateAddExercise, dayTemplateRemoveExercise, toggleCreatingDay, addDay} from '../../actions';
import DayEdit from "../../pages/days/DayEdit";

function mapStateToProps(state) {
    return {
        ...state.days.template,
        exercisesBriefly: state.dictionary.exercises
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onCreatingToggle: creating => dispatch(toggleCreatingDay(creating)),
        onCreate: day => dispatch(addDay(day)),
        onTemplateAddExercise: exercise => dispatch(dayTemplateAddExercise(exercise)),
        onTemplateRemoveExercise: exercise => dispatch(dayTemplateRemoveExercise(exercise))
    };
}

const DayEditContainer = connect(mapStateToProps, mapDispatchToProps)(DayEdit);

export default DayEditContainer;