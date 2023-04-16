import React, {Component} from 'react';
import Axi from "../../../hoc/Aux/axi";
import Button from "../../UI/Button/Button";

class OrderSumary extends Component{
    componentWillUpdate() {
        console.log('[OrderSummary] will update')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey=>{
            return <li key={igKey}>
                <span style={{textTransform:"capitalize"}}>{igKey}</span> : {this.props.ingredients[igKey]}
            </li>
        });
        return(
            <Axi>
                <h3>Your Order</h3>
                <p>
                    A delicious Burger with the following ingredients:
                </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price : {this.props.price}</strong></p>
                <p>Continue to checkout?</p>

                <Button clicked={this.props.removeModel} btnType={'Danger'}>CANCEL</Button>
                <Button btnType={'Success'}>Continue</Button>
            </Axi>
        )
    }
}

export default OrderSumary;