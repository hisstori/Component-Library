import React from 'react';
// import cart from './cart.svg';


const Cart = (props) => {
    let classList = '';
    let types = ['cart', 'cartfade']
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }
    return <button className={classList}>{props.label}</button>
}

export default Cart;