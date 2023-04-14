import React from 'react';
import Axi from "../../hoc/axi";
import Classes from './Layout.css'
function Layout(props) {
    return (
        <Axi>
            <div>ToolBar , SideDrawer , Backdrop</div>
            <main className={Classes.content}>
                {props.children}
            </main>
        </Axi>
    );
}

export default Layout;