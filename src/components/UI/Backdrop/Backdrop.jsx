import React from 'react';
import Classes from './Backdrop.css'
import Axi from "../../../hoc/axi";
function Backdrop(props) {

    return(
        <Axi>
            {props.show ? <div className={Classes.Backdrop} onClick={props.clicked}></div> : null}
        </Axi>
    )
}

export default Backdrop;