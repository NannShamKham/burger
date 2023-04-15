import React from 'react';
import Classes from './Model.css'
import Axi from "../../../hoc/axi";
import Backdrop from "../Backdrop/Backdrop";
function Model(props) {
    return (
        <Axi>
            <div className={Classes.Modal}
                 style={{
                     transform:props.show?'translateY(0)':'translateY(-100)',
                     opacity:props.show?1:0,
                     zIndex:props.show?1000:-6000
                 }}

            >
                {props.children}
            </div>
            <Backdrop show={props.show}  clicked={props.modelClosed}/>
        </Axi>

    );
}

export default Model;