import React from 'react';
import Classes from './Toolbar.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

function Toolbar(props) {
    return (
        <header className={Classes.Toolbar}>
           <DrawerToggle Toogle={props.drawerToggle}/>
            <div className={Classes.logo}>
                <Logo/>
            </div>

            <nav className={Classes.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    );
}

export default Toolbar;