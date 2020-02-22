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