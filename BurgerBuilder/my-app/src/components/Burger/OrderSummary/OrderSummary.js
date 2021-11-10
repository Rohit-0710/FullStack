import React, { Component } from 'react';
import Auxillary from '../../../hoc/Auxillary'
import Button from '../../UI/Button/Button'
class orderSummary extends Component {
    componentWillUpdate =() => {
         console.log('[orderSummary] will update')
    }
    render() {
        const ingredientsSummary = Object.keys(this.props.ingredient).map(
            (igkey) => {
                return (<li key={igkey}>
                    <span style={{ textTransform: 'capitalize' }}>
                        {igkey}</span> : {this.props.ingredient[igkey]}
                </li>)
            }
        )

        // console.log("Checking Props", this.props)

        return (
            <Auxillary>
                <h3>Your Order</h3>
                <p>Delicious Burger with following ingredients : </p>
                <ul>{ingredientsSummary}</ul>
                <p>Continue to checkout?</p>
                {/* <button >CONTINUE</button>
            <button onClick={props.disableModal}>CANCEL</button> */}
                <Button clicked={this.props.disableModal} btnType="Danger">CANCEL</Button>
                <Button clicked={this.props.continue} btnType="Success">CONTINUE</Button>
                <p>Total Price : {this.props.price}</p>

            </Auxillary>
        )
    }
}


export default orderSummary