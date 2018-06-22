import React, {Component} from 'react';
import './Workouts.css';
import Workout from "./Workout";
import ActionBar from "../../components/ActionBar";
import Button from "../../components/Button";
import Select from "../../components/Select";
import CheckBox from "../../components/CheckBox";
import WorkoutEditContainer from "../../containers/workouts/WorkoutEditContainer";

class Workouts extends Component {

    handleChangeDay = (entity) => {
        alert('change! ' + JSON.stringify(entity));
    };

    render() {
        return (
            <div className="">
                <ActionBar>
                    <CheckBox handleChange={(checked) => this.props.onToggleFollowProgram(checked)}
                              checked={this.props.settings.followProgram}/>
                    <span>Follow program</span>
                    <Select options={this.props.programs} selectedId={this.props.settings.followedProgramId}
                            handleChange={(entity) => this.props.onSelectFollowedProgram(entity.id)}/>
                    <Select options={this.props.days} handleChange={(entity) => this.handleChangeDay(entity)}/>
                    <Button text={'New workout'} handleClick={() => this.props.onCreatingToggle(true)}/>
                </ActionBar>
                {this.props.creating && <WorkoutEditContainer/>}
                <div>
                    {this.props.workouts.map((workout, i) =>
                        <Workout key={i} {...workout}/>
                    )}
                </div>
            </div>
        );
    }
}

export default Workouts;
