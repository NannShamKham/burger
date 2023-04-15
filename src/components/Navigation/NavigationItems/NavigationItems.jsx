import React from 'react';
import Classes from './NavigationItems.css'
import NavigationItem from "./NavigationItem/NavigationItem";
function NavigationItems(props) {
    return (
        <ul className={Classes.NavigationItems}>
            <NavigationItem link={'/'} active>Burger Builder</NavigationItem>
            <NavigationItem link={'/'} >Checkout</NavigationItem>
        </ul>
    );
}

export default NavigationItems;