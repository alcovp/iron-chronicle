import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.handleClick}>
                {this.props.children}{this.props.text}
            </button>
        );
    }
}

export default Button;
