import React, {Component} from 'react';
import './DayEdit.css';
import Button from "../../components/Button";
import Select from "../../components/Select";
import DayExerciseEditContainer from "../../containers/days/DayExerciseEditContainer";

class DayEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            description: props.description
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
            exercises: this.props.exercises
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
                    <DayExerciseEditContainer key={i} id={i} {...exercise}/>
                )}
                <br/>
                <Select options={this.props.exercisesBriefly}
                        handleChange={(entity) => this.props.onTemplateAddExercise(entity)}/>
                <br/>
                <input type="submit" value="Submit"/>
                <Button text={'Cancel'} handleClick={() => this.props.onCreatingToggle(false)}/>
            </form>
        );
    }
}

export default DayEdit;
