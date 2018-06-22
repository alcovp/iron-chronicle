import React, {Component} from 'react';
import './Exercises.css';
import Exercise from "./Exercise";
import ActionBar from "../../components/ActionBar";
import Button from "../../components/Button";
import ExerciseEdit from "./ExerciseEdit";

class Exercises extends Component {

    render() {
        return (
            <div className="">
                <ActionBar>
                    <Button text={'New exercise'} handleClick={() => this.props.onCreatingToggle(true)}/>
                </ActionBar>
                {this.props.creating && <ExerciseEdit onCreate={(exercise) => this.props.onCreate(exercise)}
                                                      onCancel={() => this.props.onCreatingToggle(false)}/>}
                <div>
                    {this.props.exercises.map((exercise, i) =>
                        <Exercise key={i} {...exercise}/>
                    )}
                </div>
            </div>
        );
    }
}

export default Exercises;
