import React from 'react';
import { storiesOf } from '@storybook/react';
import './ButtonOutline.css'
import ButtonOutline from './ButtonOutline';
// import Button from './Button'

storiesOf('ButtonOutline', module)
    .add('Outline Primary', () => <ButtonOutline
        label="Do Something"
        type="outprimary"
    />)
    .add('Outline Danger', () => <ButtonOutline
        label='Do Something'
        type='outdanger'
    />)
    .add('Outline Success', () => <ButtonOutline
        label='Do Something'
        type='outsuccess'
    />)
    .add('Outline Warning', () => <ButtonOutline
        label='Do Something'
        type='outwarning'
    />)
    .add('Outline Default', () => <ButtonOutline
        label='Do Something'
        type='outdefault'
    />)
    .add('Medium Outline Primary', () => <ButtonOutline
        label='Do Something'
        type='outprimary'
        medium
    />)
    .add('Medium Outline Danger', () => <ButtonOutline
        label='Do Something'
        type='outdanger'
        medium
    />)
    .add('Medium Outline Success', () => <ButtonOutline
        label='Do Something'
        type='outsuccess'
        medium
    />)
    .add('Medium Outline Warning', () => <ButtonOutline
        label='Do Something'
        type='outwarning'
        medium
    />)
    .add('Medium Outline Default', () => <ButtonOutline
        label='Do Something'
        type='outdefault'
        medium
    />)
