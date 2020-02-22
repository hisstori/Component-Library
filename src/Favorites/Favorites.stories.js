import React from 'react';
import { storiesOf } from '@storybook/react';
import './Favorites.css'
import Favorites from './Favorites';


storiesOf('Favorites', module)
    .add('Add To Favorites', () => <Favorites
        label='Add To Favorites'
        type='favorites'
    />)
    .add('Heart Button', () => <Favorites
        label='h'
        type='heart'
    />)