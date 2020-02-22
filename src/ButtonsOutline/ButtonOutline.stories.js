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
    .add('OutDanger', () => <ButtonOutline
        label='OutDanger'
        type='outdanger'
    />)
    .add('OutSuccess', () => <ButtonOutline
        label='OutSuccess'
        type='outsuccess'
    />)
    .add('OutWarning', () => <ButtonOutline
        label='OutWarning'
        type='outwarning'
    />)
    .add('OutDefault', () => <ButtonOutline
        label='OutDefault'
        type='outdefault'
    />)
    .add('M-OutPrimary', () => <ButtonOutline
        label='M-OutPrimary'
        type='outprimary'
    />)
    .add('M-OutDanger', () => <ButtonOutline
        label='M-OutDanger'
        type='outdanger'
    />)
    .add('M-OutSuccess', () => <ButtonOutline
        label='M-OutSuccess'
        type='outsuccess'
    />)
    .add('M-OutWarning', () => <ButtonOutline
        label='M-OutWarning'
        type='outwarning'
    />)
    .add('M-OutDefault', () => <ButtonOutline
        label='M-OutDefeault'
        type='outdefault'
    />)
