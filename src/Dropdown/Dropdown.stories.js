import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import './Dropdown.css'
// import ReactDOM from 'react-dom';
import Dropdown from './Dropdown';


storiesOf('Dropdown', module)
    .add('Dropdown', () => <Dropdown
        label='Select'
        type='dropdown'
    />)
    .add('Dropdown Medium', () => <Dropdown
        label='Select'
        type='dropdown-medium'
    />)
    .add('Dropdown Large', () => <Dropdown
        label='Select'
        type='dropdown-large'
    />)

    // ReactDOM.render(<Dropdown />, document.getElementById('root'));

    