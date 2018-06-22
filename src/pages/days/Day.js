import React, {Component} from 'react';
import './Day.css';
import DayExercise from "../../components/DayExercise";

class Day extends Component {
    render() {
        return (
            <div className="">
                <p className={'day-name'}>{this.props.name}</p>
                {this.props.exercises.map((exercise, i) =>
                    <DayExercise key={i} {...exercise}/>
                )}
                <p className={'day-description'}>{this.props.description}</p>
            </div>
        );
    }
}

export default Day;
