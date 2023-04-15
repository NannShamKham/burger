import React from 'react';
import Classes from './Toolbar.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

function Toolbar(props) {
    return (
        <header className={Classes.Toolbar}>
            <div>MENU</div>
            <div className={Classes.logo}>
                <Logo/>
            </div>

            <nav>
                <NavigationItems/>
            </nav>
        </header>
    );
}

export default Toolbar;