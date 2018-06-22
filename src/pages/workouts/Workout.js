import React, {Component} from 'react';
import './Workout.css';
import DayExercise from "../../components/DayExercise";
import Hint from "../../components/Hint";

class Workout extends Component {
    render() {
        return (
            <div className="">
                <p>
                    <span className={'workout-date'}>{this.props.date}</span>
                    <span className={'workout-name'}>{this.props.name}</span>
                    <Hint value={this.props.description}/>
                </p>
                {this.props.exercises.map((exercise, i) =>
                    <DayExercise key={i} {...exercise}/>
                )}
                <p className={'workout-comment'}>{this.props.comment}</p>
            </div>
        );
    }
}

export default Workout;
