import React, {Component} from 'react';
import './DayOrWorkoutExerciseEdit.css';
import Button from "./Button";
import SetEdit from "./SetEdit";

class DayOrWorkoutExerciseEdit extends Component {

    render() {
        return (
            <div className="">
                <span>{this.props.name}</span>
                <Button text={'+ Set'} handleClick={(event) => {
                    event.preventDefault();
                    return this.props.onTemplateAddSet({
                        weight: 0,
                        repeats: 0,
                        index: this.props.sets ? this.props.sets.length : 0
                    })
                }}/>
                {this.props.sets && this.props.sets.map((set, i) =>
                    <SetEdit key={i} index={i} {...set} onChange={(entity) => this.props.onTemplateEditSet(entity)}/>
                )}
            </div>
        );
    }
}

export default DayOrWorkoutExerciseEdit;
