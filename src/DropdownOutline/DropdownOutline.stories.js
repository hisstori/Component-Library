import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import './DropdownOutline.css'
// import ReactDOM from 'react-dom';
import DropdownOutline from './DropdownOutline';


storiesOf('Dropdown Outline', module)
    .add('Dropdown Outline', () => <DropdownOutline
        label='Select'
        type='dropdown outline'
    />)
    .add('Dropdown Outline Medium', () => <DropdownOutline
        label='Select'
        type='dropdown-outline-medium'
    />)
    .add('Dropdown Outline Large', () => <DropdownOutline
        label='Select'
        type='dropdown-outline-large'
    />)