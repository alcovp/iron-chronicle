import React, {Component} from 'react';
import './Set.css';

class Set extends Component {
    render() {
        return (
            <span>
                <span>{this.props.weight}</span>
                <span>x</span>
                <span>{this.props.repeats}</span>
            </span>
        );
    }
}

export default Set;
