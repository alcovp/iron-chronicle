import React, {Component} from 'react';
import './CheckBox.css';

class CheckBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked || false
        };
    }

    handleChange(event) {
        this.setState(
            {
                checked: event.target.checked
            },
            () => this.props.handleChange(this.state.checked)
        );
    }

    render() {
        return (
            <input onChange={(event) => this.handleChange(event)} defaultChecked={this.state.checked} type="checkbox"/>
        );
    }
}

export default CheckBox;
