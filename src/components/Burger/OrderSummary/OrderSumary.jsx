import React from 'react';
import Axi from "../../../hoc/axi";
import Button from "../../UI/Button/Button";

function OrderSumary(props) {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey=>{
        return <li key={igKey}>
            <span style={{textTransform:"capitalize"}}>{igKey}</span> : {props.ingredients[igKey]}
        </li>
    });
    return (
        <Axi>
            <h3>Your Order</h3>
            <p>
                A delicious Burger with the following ingredients:
            </p>
            <ul>
                {ingredientSummary}
            </ul>

            <p>Continue to checkout?</p>

            <Button clicked={props.removeModel} btnType={'Danger'}>CANCEL</Button>
            <Button btnType={'Success'}>Continue</Button>
        </Axi>
    );
}

export default OrderSumary;