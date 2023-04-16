import React from 'react';
import Classes from './DrawerToggle.css'
function DrawerToggle(props) {
    return (
        <div className={Classes.DrawerToggle} onClick={props.Toogle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default DrawerToggle;