import React, {Component} from 'react';
import './WorkoutEdit.css';
import Button from "../../components/Button";
import Select from "../../components/Select";
import WorkoutExerciseEditContainer from "../../containers/workouts/WorkoutExerciseEditContainer";

class WorkoutEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            description: props.description,
            date: props.date,
            comment: props.comment
        };

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.props.onCreate({
            name: this.state.name,
            description: this.state.description,
            exercises: this.props.exercises,
            date: this.state.date,
            comment: this.state.comment
        });
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>
                    <span>Name:</span>
                    <input name={'name'} type="text" defaultValue={this.state.name}
                           onChange={(event) => this.handleInputChange(event)}/>
                </label>
                <br/>
                <label>
                    <span>Description:</span>
                    <textarea name={'description'} defaultValue={this.state.description}
                              onChange={(event) => this.handleInputChange(event)}/>
                </label>
                <br/>
                {this.props.exercises.map((exercise, i) =>
                    <WorkoutExerciseEditContainer key={i} id={i} {...exercise}/>
                )}
                <br/>
                <Select options={this.props.exercisesBriefly}
                        handleChange={(entity) => this.props.onTemplateAddExercise(entity)}/>
                <br/>
                <label>
                    <span>Date:</span>
                    <input name={'date'} type="text" defaultValue={this.state.date}
                           onChange={(event) => this.handleInputChange(event)}/>
                </label>
                <br/>
                <label>
                    <span>Comment:</span>
                    <textarea name={'comment'} defaultValue={this.state.comment}
                              onChange={(event) => this.handleInputChange(event)}/>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
                <Button text={'Cancel'} handleClick={() => this.props.onCreatingToggle(false)}/>
            </form>
        );
    }
}

export default WorkoutEdit;
