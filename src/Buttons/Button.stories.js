import React from 'react';
import { storiesOf } from '@storybook/react';
import './Button.css';
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
    .add('Warning', () => <Button
        label="Warning"
        type="warning"
    />)
    .add('Success', () => <Button
        label="Success"
        type="success"        
    />)
    .add('Large Primary', () => <Button
        label="Large Primary"
        type="primary"
        large
    />)
    .add('Large Danger', () => <Button
        label="Large Danger"
        type="danger"
        large
    />)