import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Classes from './SideDrawer.css'
function SideDrawer(props) {
    return (
        <div className={Classes.SideDrawer}>
            <div className={Classes.logo}>
                <Logo />
            </div>

            <nav>
                <NavigationItems/>
            </nav>
        </div>
    );
}

export default SideDrawer;