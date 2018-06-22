import React, {Component} from 'react';
import './Days.css';
import Day from "./Day";
import ActionBar from "../../components/ActionBar";
import Button from "../../components/Button";
import DayEditContainer from "../../containers/days/DayEditContainer";

class Days extends Component {

    render() {
        return (
            <div className="">
                <ActionBar>
                    <Button text={'New day'} handleClick={() => this.props.onCreatingToggle(true)}/>
                </ActionBar>
                {this.props.creating && <DayEditContainer/>}
                <div>
                    {this.props.days.map((day, i) =>
                        <Day key={i} {...day}/>
                    )}
                </div>
            </div>
        );
    }
}

export default Days;
