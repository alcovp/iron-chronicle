import React, {Component} from 'react';
import './Header.css';
import Menu from "./Menu";

class Header extends Component {

    render() {
        return (
            <header className="">
                <Menu/>
            </header>
        );
    }
}

export default Header;