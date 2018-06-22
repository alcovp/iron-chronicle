import React, {Component} from 'react';
import './Program.css';
import SubProgram from "./SubProgram";

class Program extends Component {
    render() {
        return (
            <div className="">
                <p className={'program-name'}>{this.props.name}</p>
                {this.props.jobs.map((job, i) =>
                    job.days
                        ? <SubProgram key={i} {...job}/>
                        : <p key={i}>{job.name}</p>
                )}
                <p className={'program-description'}>{this.props.description}</p>
            </div>
        );
    }
}

export default Program;
