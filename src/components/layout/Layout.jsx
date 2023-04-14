import React from 'react';

function Layout(props) {
    return (
        <React.Fragment>
            <div>ToolBar , SideDrawer , Backdrop</div>
            <main>
                {props.children}
            </main>
        </React.Fragment>
    );
}

export default Layout;