import {connect} from 'react-redux';

import {addWorkout, selectFollowedProgram, toggleCreatingWorkout, toggleFollowProgram} from '../../actions/index';
import Workouts from '../../pages/workouts/Workouts';

function mapStateToProps(state) {
    return {
        ...state.workouts,
        programs: state.dictionary.programs,
        days: state.dictionary.days,
        settings: state.settings
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onCreatingToggle: creating => dispatch(toggleCreatingWorkout(creating)),
        onCreate: workout => dispatch(addWorkout(workout)),
        onToggleFollowProgram: enabled => dispatch(toggleFollowProgram(enabled)),
        onSelectFollowedProgram: programId => dispatch(selectFollowedProgram(programId))
    };
}

const WorkoutsContainer = connect(mapStateToProps, mapDispatchToProps)(Workouts);

export default WorkoutsContainer;