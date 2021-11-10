import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger = (props) => {

    /* explaination
        // props.ingredients = {Salad :1 ,   and so on}
       // Object.keys(props.ingredients) = "salad", "bacon", "cheese", "meat"
       //mapping an array where igkey = salad one time bacon 1 time cheese 2 time meat 2 time
      // reduce is used to split array into object 
       */
    let transformIngredients = Object.keys(props.ingredients).map(
        (igkey) => {
            return [...Array(props.ingredients[igkey])].map(
                (_, ikey) => {
                    return <BurgerIngredient key={ikey + igkey} type={igkey} />
                }
            )
        }
    ).reduce((arr, curarr) => {
        return arr.concat(curarr)
    });



    console.log("tran", transformIngredients);
    console.log("kk", Object.keys(props.ingredients));
    console.log("Rohit", Object.keys(props.ingredients).map(
        (igkey) => {
            return [...Array(props.ingredients[igkey])].map(
                (_, ikey) => {
                    return <BurgerIngredient key={ikey + igkey} type={igkey} />
                }
            )
        }
    ));
    // .map((key) => {
    //     return [...Array(props.ingredients[key])]
    // })
    //)

    if(
        transformIngredients.length === 0
    )
    {
        transformIngredients = <p>Please start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' /> {transformIngredients}
            {/* <BurgerIngredient type = 'cheese' />
            <BurgerIngredient type = 'meat' /> */}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
}

export default burger