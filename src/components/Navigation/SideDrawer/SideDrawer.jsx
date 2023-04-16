import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Classes from './SideDrawer.css'
import Axi from "../../../hoc/Aux/axi";
import Backdrop from "../../UI/Backdrop/Backdrop";
function SideDrawer(props) {
    let attachClasses = [Classes.SideDrawer,Classes.Close];
    if (props.open){
        attachClasses = [Classes.SideDrawer,Classes.Open];
    }
    return (
        <Axi>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachClasses.join(' ')}>
                <div className={Classes.logo}>
                    <Logo />
                </div>

                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Axi>

    );
}

export default SideDrawer;