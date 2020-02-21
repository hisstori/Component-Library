import React from 'react';
import { storiesOf } from '@storybook/react';
import './ButtonOutline.css'
import ButtonOutline from './ButtonOutline';
// import Button from './Button'

storiesOf('ButtonOutline', module)
    .add('OutPrimary', () => <ButtonOutline
        label="OutPrimary"
        type="outprimary"
    />)
    // .add('OutlineD', () => <Button
    //     label='Outline-D'
    //     type='outline-d'
    // />)
