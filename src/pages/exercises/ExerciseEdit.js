import React, {Component} from 'react';
import './ExerciseEdit.css';
import Button from "../../components/Button";

class ExerciseEdit extends Component {

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
        this.props.onCreate(this.state);
        event.preventDefault();
    }

    handleCancel() {
        this.props.onCancel();
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>
                    <span>Name:</span>
                    <input name={'name'} type="text" value={this.state.value}
                           onChange={(event) => this.handleInputChange(event)}/>
                </label>
                <br />
                <label>
                    <span>Description:</span>
                    <textarea name={'description'} value={this.state.value}
                              onChange={(event) => this.handleInputChange(event)}/>
                </label>
                <br />
                <input type="submit" value="Submit"/>
                <Button text={'Cancel'} handleClick={() => this.handleCancel()}/>
            </form>
        );
    }
}

export default ExerciseEdit;
