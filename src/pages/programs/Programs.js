import React, {Component} from 'react';
import './Programs.css';
import Program from "./Program";
import ActionBar from "../../components/ActionBar";
import Button from "../../components/Button";
import ProgramEdit from "./ProgramEdit";

class Programs extends Component {

    render() {
        return (
            <div className="">
                <ActionBar>
                    <Button text={'New program'} handleClick={() => this.props.onCreatingToggle(true)}/>
                </ActionBar>
                {this.props.creating && <ProgramEdit onCreate={(program) => this.props.onCreate(program)}
                                                     onCancel={() => this.props.onCreatingToggle(false)}
                                                     days={this.props.days}
                                                     programs={this.props.programsBriefly}/>}
                <div>
                    {this.props.programs.map((program, i) =>
                        <Program key={i} {...program}/>
                    )}
                </div>
            </div>
        );
    }
}

export default Programs;
