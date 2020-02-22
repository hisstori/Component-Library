import React from 'react';
import { storiesOf } from '@storybook/react';
import './Button.css'
import Button from './Button';

storiesOf('Button', module)
    .add('Primary', () => <Button 
        label="Primary" 
        type="primary"
    />) 
    .add('Danger', () => <Button
        label="Danger"
        type="danger"
    />)
    .add('Success', () => <Button
        label="Success"
        type="success"
    />)
    .add('Warning', () => <Button
        label="Warning"
        type="warning"        
    />)
    .add('Default', () => <Button
        label="Default"
        type="default"
    />)
    .add('M.Primary', () => <Button
        label='M.Primary'
        type='primary'
        medium
    />)
    .add('M.Danger', () => <Button
        label='M.Danger'
        type='danger'
        medium
    />)
    .add('M.Success', () => <Button
        label='M.Success'
        type='success'
        medium
    />)
    .add('M.Warning', () => <Button
        label='M.Warning'
        type='warning'
        medium
    />)
    .add('M.Default', () => <Button
        label='M.Default'
        type='default'
        medium
    />)