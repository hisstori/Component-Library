import React from 'react';
import { storiesOf } from '@storybook/react';
import './Button.css'
import Button from './Button';

storiesOf('Button', module)
    .add('Primary', () => <Button 
        label="Do Something" 
        type="primary"
    />) 
    .add('Danger', () => <Button
        label="Do Something"
        type="danger"
    />)
    .add('Success', () => <Button
        label="Do Something"
        type="success"
    />)
    .add('Warning', () => <Button
        label="Do Something"
        type="warning"        
    />)
    .add('Default', () => <Button
        label="Do Something"
        type="default"
    />)
    .add('Medium Primary', () => <Button
        label='Do Something'
        type='primary'
        medium
    />)
    .add('Medium Danger', () => <Button
        label='Do Something'
        type='danger'
        medium
    />)
    .add('Medium Success', () => <Button
        label='Do Something'
        type='success'
        medium
    />)
    .add('Medium Warning', () => <Button
        label='Do Something'
        type='warning'
        medium
    />)
    .add('Medium Default', () => <Button
        label='Do Something'
        type='default'
        medium
    />)