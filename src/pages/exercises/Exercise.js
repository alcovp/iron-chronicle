import React, {Component} from 'react';
import './Exercise.css';

class Exercise extends Component {

    render() {
        return (
            <div className="">
                <p className={'exercise-name'}>{this.props.name}</p>
                <p className={'exercise-description'}>{this.props.description}</p>
            </div>
        );
    }
}

export default Exercise;
