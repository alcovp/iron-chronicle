import React, {Component} from 'react';
import './Select.css';

class Select extends Component {

    constructor(props) {
        super(props);

        const selected = this.props.options.find(o => o.id === this.props.selectedId);

        this.state = {
            value: this.props.selectedId || -1,
            name: selected ? selected.name : '',
            options: [
                {
                    id: -1,
                    name: 'select an option'
                },
                ...this.props.options
            ]
        };
    }

    handleChange(event) {
        let value = parseInt(event.target.value, 10);
        this.setState(
            {
                value: event.target.value,
                name: this.props.options.find(o => o.id === value).name
            },
            () => this.props.handleChange({
                id: value,
                name: this.state.name
            })
        );
    }

    render() {
        return (
            <select onChange={(event) => this.handleChange(event)} defaultValue={this.state.value}>
                {this.state.options.map((option, i) =>
                    <option key={i}
                            disabled={option.id === -1}
                            style={{display: option.id === -1 && this.state.value !== -1 ? 'none' : 'inherit'}}
                            value={option.id}>{option.name}</option>
                )}
            </select>
        );
    }
}

export default Select;
