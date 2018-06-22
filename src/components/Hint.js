import React, {Component} from 'react';
import './Hint.css';

class Hint extends Component {
    render() {
        return (
            <span className={''} title={this.props.value}>?</span>
        );
    }
}

export default Hint;
