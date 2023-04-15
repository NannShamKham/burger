import React from 'react';
import BurgerLogo from '../../assets/images/burger_logo.png'
import Classes from './Logo.css'
function Logo(props) {
    return (
        <div className={Classes.Logo} style={{height:props.height}}>
            <img src={BurgerLogo} alt="burgerLogo"/>
        </div>
    );
}

export default Logo;