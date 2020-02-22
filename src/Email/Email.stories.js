import React from 'react';
import { storiesOf } from '@storybook/react';
import './Email.css'
import Email from './Email';


storiesOf('Email', module)
    .add('Email', () => <Email
        label='Email')