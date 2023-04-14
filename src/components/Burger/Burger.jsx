import React from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import Classes from './Burger.css'
function Burger(props) {

    let transformedIngredient = Object.keys(props.ingredients).map(key => {
       return [...Array(props.ingredients[key])].map((_,i)=>{
           return <BurgerIngredient key = {key + i} type={key}/>
       })
    }).reduce((arr,el)=> {
        return arr.concat(el)
    },[]);
    console.log(transformedIngredient);
    return (
        <div className={Classes.Burger}>
            <BurgerIngredient type={'bread-top'}/>
            {transformedIngredient.length >0 ? transformedIngredient : <p>Please Start Adding ingredient</p>}
            <BurgerIngredient type={'bread-bottom'}/>
        </div>
    );
}

export default Burger;