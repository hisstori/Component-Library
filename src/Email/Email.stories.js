import React from 'react';
import { storiesOf } from '@storybook/react';
import './Email.css'
import Email from './Email';


storiesOf('Email', module)
    .add('Email', () => <Email
        type='email'
    />)
    .add('Email Medium', () => <Email
        type='email-medium'
        medium
    />)
    .add('Email Large', () => <Email
        type='email-large'
        large
    />)