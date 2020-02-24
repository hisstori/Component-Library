import React from 'react';
import { storiesOf } from '@storybook/react';
import './ButtonFade.css'
import ButtonFade from './ButtonFade';


storiesOf('ButtonFade', module)
    .add('Fade Primary', () => <ButtonFade
        label='Do Something'
        type='fadeprimary'
    />)
    .add('Fade Danger', () => <ButtonFade
        label='Do Something'
        type='fadedanger'
    />)
    .add('Fade Success', () => <ButtonFade
        label='Do Something'
        type='fadesuccess'
    />)
    .add('Fade Warning', () => <ButtonFade
        label='Do Something'
        type='fadewarning'
    />)
    .add('Fade Default', () => <ButtonFade
        label='Do Something'
        type='fadedefault'
    />)
    .add('Medium Fade Primary', () => <ButtonFade
        label='Do Something'
        type='fadeprimary'
        medium
    />)
    .add('Medium Fade Danger', () => <ButtonFade
        label='Do Something'
        type='fadedanger'
        medium
    />)
    .add('Medium Fade Success', () => <ButtonFade
        label='Do Something'
        type='fadesuccess'
        medium
    />)
    .add('Medium Fade Warning', () => <ButtonFade
        label='Do Something'
        type='fadewarning'
        medium
    />)
    .add('Medium Fade Default', () => <ButtonFade
        label='Do Something'
        type='fadedefault'
        medium
    />)