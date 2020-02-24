import React from 'react';
import { storiesOf } from '@storybook/react';
import './Checkbox.css'
import Checkbox from './Checkbox';

storiesOf('Checkbox', module)
    .add('Black Checkbox (Checked)', () => <Checkbox
        type='black'
    />)