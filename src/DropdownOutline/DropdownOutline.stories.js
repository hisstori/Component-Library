import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import './DropdownOutline.css'
// import ReactDOM from 'react-dom';
import Dropdown from './DropdownOutline';


storiesOf('Dropdown Outline', module)
    .add('Dropdown Outline', () => <Dropdown
        label='Select'
        type='dropdown outline'
    />)
    .add('Dropdown Outline Medium', () => <Dropdown
        label='Select'
        type='dropdown-outline-medium'
    />)
    .add('Dropdown Outline Large', () => <Dropdown
        label='Select'
        type='dropdown-outline-large'
    />)