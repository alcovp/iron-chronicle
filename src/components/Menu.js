import React, {Component} from 'react';
import './Menu.css';
import {NavLink} from "react-router-dom";

const links = [
    {
        url: '/workouts',
        name: 'Workouts'
    },
    {
        url: '/exercises',
        name: 'Exercises'
    },
    {
        url: '/days',
        name: 'Days'
    },
    {
        url: '/programs',
        name: 'Programs'
    }
];

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            links: links
        };
    }

    render() {
        return (
            <div className="">
                {this.state.links.map((link, i) =>
                    <NavLink key={i}
                             to={link.url}>
                        {link.name}
                    </NavLink>
                )}
            </div>
        );
    }
}

export default Menu;