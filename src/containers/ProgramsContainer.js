import {connect} from 'react-redux';

import {addProgram, toggleCreatingProgram} from '../actions';
import Programs from '../pages/programs/Programs';

function mapStateToProps(state) {
    return {
        ...state.programs,
        programsBriefly: state.dictionary.programs,
        days: state.dictionary.days
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onCreatingToggle: creating => dispatch(toggleCreatingProgram(creating)),
        onCreate: program => dispatch(addProgram(program))
    };
}

const ProgramsContainer = connect(mapStateToProps, mapDispatchToProps)(Programs);

export default ProgramsContainer;