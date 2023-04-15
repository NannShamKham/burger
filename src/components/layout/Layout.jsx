import React from 'react';
import Axi from "../../hoc/axi";
import Classes from './Layout.css'
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
function Layout(props) {
    return (
        <Axi>
           <Toolbar/>
            <SideDrawer/>
            <main className={Classes.content}>
                {props.children}
            </main>
        </Axi>
    );
}

export default Layout;