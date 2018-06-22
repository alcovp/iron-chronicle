import React, {Component} from 'react';
import './SetEdit.css';

class SetEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weight: this.props.weight,
            repeats: this.props.repeats,
            index: this.props.index
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState(
            {
                [name]: value
            },
            () => this.props.onChange(this.state)
        );
    }

    render() {
        return (
            <span>
                <label>
                    <input name={'weight'} type="text" defaultValue={this.props.weight}
                           onChange={(event) => this.handleInputChange(event)}/>
                </label>
                <span>x</span>
                <label>
                    <input name={'repeats'} type="text" defaultValue={this.props.repeats}
                           onChange={(event) => this.handleInputChange(event)}/>
                </label>
            </span>
        );
    }
}

export default SetEdit;
