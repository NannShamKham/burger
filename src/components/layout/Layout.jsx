import React from 'react';
import Axi from "../../hoc/axi";
import Classes from './Layout.css'
import Toolbar from "../Navigation/Toolbar/Toolbar";
function Layout(props) {
    return (
        <Axi>
           <Toolbar/>
            <main className={Classes.content}>
                {props.children}
            </main>
        </Axi>
    );
}

export default Layout;