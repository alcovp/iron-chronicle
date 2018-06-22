import React, {Component} from 'react';
import './SubProgram.css';
import Hint from "../../components/Hint";

class SubProgram extends Component {
    render() {
        return (
            <div className="">
                <p>{this.props.name}<Hint value={this.props.days}/></p>
            </div>
        );
    }
}

export default SubProgram;
