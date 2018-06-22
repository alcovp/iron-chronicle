import React, {Component} from 'react';
import './ProgramEdit.css';
import Button from "../../components/Button";
import Select from "../../components/Select";

class ProgramEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            description: props.description,
            programs: props.programs,
            days: props.days,
            jobs: []
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
            jobs: this.state.jobs
        });
        event.preventDefault();
    }

    handleCancel() {
        this.props.onCancel();
    }

    handleAddDay(day) {
        this.setState((prevState) => ({
            jobs: [...prevState.jobs, day]
        }));
    }

    handleAddSubProgram(program) {
        this.setState((prevState) => ({
            jobs: [...prevState.jobs, program]
        }));
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>
                    <span>Name:</span>
                    <input name={'name'} type="text" value={this.state.value}
                           onChange={(event) => this.handleInputChange(event)}/>
                </label>
                <br/>
                <label>
                    <span>Description:</span>
                    <textarea name={'description'} value={this.state.value}
                              onChange={(event) => this.handleInputChange(event)}/>
                </label>
                <br/>
                {this.state.jobs.map((job, i) =>
                    <p key={i}>{job.name}</p>
                )}
                <br/>
                <Select options={this.state.days} handleChange={(entity) => this.handleAddDay(entity)}/>
                <Select options={this.state.programs} handleChange={(entity) => this.handleAddSubProgram(entity)}/>
                <br/>
                <input type="submit" value="Submit"/>
                <Button text={'Cancel'} handleClick={() => this.handleCancel()}/>
            </form>
        );
    }
}

export default ProgramEdit;
