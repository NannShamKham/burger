import React,{Component} from "react";
import Axi from "../hoc/axi";
import Burger from "../components/Burger/Burger";
import BuildControls from "../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES={
    salad:0.3,
    cheese:0.5,
    bacon:0.4,
    meat:1.2
}
class BurgerBuilder extends Component{
    state={
        ingredients :{
            salad:0,
            cheese:0,
            bacon:0,
            meat:0
        },
        totalPrice:4
    }
    addIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type]=updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredient})
    }

    removeIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type]=updatedCount;
        const priceReduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceReduction;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredient})
    }
    render() {
        const disableInfo = {
            ...this.state.ingredients
        }
        for (let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }
        return (
            <Axi>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdd={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler}
                    disabled={disableInfo}
                />
            </Axi>
        );
    }
}

export default BurgerBuilder;