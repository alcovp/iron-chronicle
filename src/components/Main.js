import React, {Component} from 'react';
import './Main.css';
import {Redirect, Route, Switch} from "react-router-dom";
import NotFound from "../pages/NotFound";
import ExercisesContainer from "../containers/ExercisesContainer";
import ProgramsContainer from "../containers/ProgramsContainer";
import DaysContainer from "../containers/days/DaysContainer";
import WorkoutsContainer from "../containers/workouts/WorkoutsContainer";

class Main extends Component {

    render() {
        return (
            <main>
                <Switch>
                    <Redirect exact from="/" to="/workouts"/>
                    <Route exact path="/workouts" component={WorkoutsContainer}/>
                    <Route exact path="/exercises" component={ExercisesContainer}/>
                    <Route exact path="/days" component={DaysContainer}/>
                    <Route exact path="/programs" component={ProgramsContainer}/>
                    <Route component={NotFound}/>
                </Switch>
            </main>
        );
    }
}

export default Main;