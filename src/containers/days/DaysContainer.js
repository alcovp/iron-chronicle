import {connect} from 'react-redux';

import {toggleCreatingDay} from '../../actions/index';
import Days from '../../pages/days/Days';

function mapStateToProps(state) {
    return {
        ...state.days
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onCreatingToggle: creating => dispatch(toggleCreatingDay(creating))
    };
}

const DaysContainer = connect(mapStateToProps, mapDispatchToProps)(Days);

export default DaysContainer;