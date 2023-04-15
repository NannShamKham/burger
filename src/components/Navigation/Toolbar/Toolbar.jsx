import React from 'react';
import Classes from './Toolbar.css'
import Logo from "../../Logo/Logo";
function Toolbar(props) {
    return (
        <header className={Classes.Toolbar}>
            <div>MENU</div>
            <Logo/>
            <nav>
                <ul>

                </ul>
            </nav>
        </header>
    );
}

export default Toolbar;