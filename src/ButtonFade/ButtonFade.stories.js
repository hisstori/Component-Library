import React from 'react';
import { storiesOf } from '@storybook/react';
import './ButtonFade.css'
import ButtonFade from './ButtonFade';


storiesOf('ButtonFade', module)
    .add('FadePrimary', () => <ButtonFade
        label='FadePrimary'
        type='fadeprimary'
    />)
    .add('FadeDanger', () => <ButtonFade
        label='FadeDanger'
        type='fadedanger'
    />)
    .add('FadeSuccess', () => <ButtonFade
        label='FadeSuccess'
        type='fadesuccess'
    />)
    .add('FadeWarning', () => <ButtonFade
        label='FadeWarning'
        type='fadewarning'
    />)
    .add('FadeDefault', () => <ButtonFade
        label='FadeDefault'
        type='fadedefault'
    />)
    .add('M-FadePrimary', () => <ButtonFade
        label='M-FadePrimary'
        type='fadeprimary'
    />)
    .add('M-FadeDanger', () => <ButtonFade
        label='M-FadeDanger'
        type='fadedanger'
    />)
    .add('M-FadeSuccess', () => <ButtonFade
        label='M-FadeSuccess'
        type='fadesuccess'
    />)
    .add('M-FadeWarning', () => <ButtonFade
        label='M-FadeWarning'
        type='fadewarning'
    />)
    .add('M-FadeDefault', () => <ButtonFade
        label='M-FadedDefault'
        type='fadedefault'
    />)