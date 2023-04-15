import React from 'react';
import Classes from './BuildControls.css'
import BuildControl from "./BuildControl/BuildControl";
function BuildControls(props) {
    const controls = [
        {label:'Salad',type:'salad'},
        {label:'Cheese',type:'cheese'},
        {label:'Bacon',type:'bacon'},
        {label:'Meat',type:'meat'},
    ]
    return (
        <div className={Classes.BuildControls}>
            <p>Current Price : <strong>{props.price.toFixed(2)} $</strong></p>
            {
                controls.map(control=>{
                    return (<BuildControl
                        added={()=>props.ingredientAdd(control.type)}
                        remove={()=>props.ingredientRemove(control.type)}
                        key={control.label}
                        label={control.label}
                        disabled={props.disabled[control.type]}
                    />)
                })
            }
        <button onClick={props.ordered} disabled={!props.purchasable} className={Classes.OrderButton}>ORDER NOW !</button>
        </div>
    );
}

export default BuildControls;