import React from 'react';
import { storiesOf } from '@storybook/react';
import './Select.css'
import Select from './Select';


storiesOf('Select', module)
    .add('Select Bar', () => <Select
        label='Select'
        type='select'
    />)
    .add('Select Bar Medium', () => <Select
        label='Select'
        type='select-medium'
    />)
    .add('Select Bar Large', () => <Select
        label='Select'
        type='select-large'
    />)