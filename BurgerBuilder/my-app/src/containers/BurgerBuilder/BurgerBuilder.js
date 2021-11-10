import React, { Component } from "react";

import Auxillary from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger'
import BuildControls from "../../components/Burger/BurgerIngredient/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"

const INGREDIENT_PRICE = {
    salad: 5,
    bacon: 5,
    meat: 10,
    cheese: 5

}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0

        },
        totalPrice: 10,
        purchasable: false,
        showmodal: false
    };

    updatePurchaseState = (ingredients) => {
        //const ingredients = {...this.state.ingredients}
        const sum = Object.keys(ingredients).map(igkey => {
            return ingredients[igkey]
        }
        ).reduce((sum, currentSum) => {
            return sum + currentSum
        }, 0)

        this.setState({ purchasable: sum > 0 })

        console.log("ss", sum)
        // else {
        //     this.setState({purchasable : false})
        // }
    }

    addIngredients = (type) => {

        const oldCount = this.state.ingredients[type]
        const newCount = oldCount + 1
        const updatedIngredient = { ...this.state.ingredients }
        updatedIngredient[type] = newCount

        //this.state.ingredients[type] = newCount;
        const priceAddition = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition
        this.setState({ ingredients: updatedIngredient, totalPrice: newPrice })
        this.updatePurchaseState(updatedIngredient);
        console.log("Price", newPrice);
    };

    ordered = () => {
        this.setState({ showmodal: true })
    };

    continue = () => {
        alert("You Continue!")
    }

    checkoutNo = () => {
        this.setState({ showmodal: false })
        console.log("checkingyes", this.state.showmodal)
    };

    removeIngredients = (type) => {

        const oldCount = this.state.ingredients[type]
        const newCount = oldCount - 1
        const updatedIngredient = { ...this.state.ingredients }
        updatedIngredient[type] = newCount

        if (newCount < 0) {
            return
        }

        // const random = parseInt(Date.now() * Math.random());
        //this.setState({number : random})


        //this.state.ingredients[type] = newCount;
        const priceDeduction = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction
        this.setState({ ingredients: updatedIngredient, totalPrice: newPrice })
        this.updatePurchaseState(updatedIngredient);
        console.log("Price", newPrice);
    };

    //    numberGenerator = () => {
    //        const random = Math.random(5);
    //        this.setState({number : random})

    //    }

    render() {
        console.log("Check count", this.state.ingredients['cheese']);

        return (
            <Auxillary>
                <Modal show={this.state.showmodal} noshow = {this.checkoutNo}>
                    <OrderSummary ingredient=
                        {this.state.ingredients} 
                        disableModal={this.checkoutNo}
                         continue = {this.continue}
                         price={this.state.totalPrice} /> </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls add={this.addIngredients}
                    price={this.state.totalPrice}
                    delete={this.removeIngredients}
                    purchasestate={this.state.purchasable}
                    showModal={this.ordered}
                />


            </Auxillary>
        );
    }
}

export default BurgerBuilder;