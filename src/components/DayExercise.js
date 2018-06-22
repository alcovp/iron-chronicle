import React, {Component} from 'react';
import './DayExercise.css';
import Set from "./Set";
import Hint from "./Hint";

class DayExercise extends Component {
    render() {
        return (
            <div className="">
                <span>{this.props.name}<Hint value={this.props.description}/></span>
                {this.props.sets.map((set, i) =>
                    <Set key={i} {...set}/>
                )}
            </div>
        );
    }
}

export default DayExercise;
