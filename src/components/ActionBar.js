import React, {Component} from 'react';
import './ActionBar.css';

class ActionBar extends Component {
    render() {
        return (
            <div className="">
                {this.props.children}
            </div>
        );
    }
}

export default ActionBar;
