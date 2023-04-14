import React from 'react';
import Classes from './BuildControl.css'
function BuildControl(props) {
    return (
        <div className={Classes.BuildControl}>
            <div className={Classes.Label}>{props.label}</div>
            <button disabled={props.disabled} className={Classes.Less} onClick={props.remove}>Less</button>
            <button onClick={props.added} className={Classes.More}>More</button>
        </div>
    );
}

export default BuildControl;