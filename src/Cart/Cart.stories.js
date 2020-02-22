import React from 'react';
import { storiesOf } from '@storybook/react';
import './Cart.css'
import Cart from './Cart';


storiesOf('Cart', module)
    .add('Add To Cart Button', () => <Cart
        label='Add To Cart'
        type='addcart'
    />)
    .add('Cart Button', () => <Cart
        label='c'
        type='cart'
    />)