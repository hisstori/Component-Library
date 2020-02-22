import React from 'react';

const ButtonFade = (props) => {
    let classList = '';
    let types = ['fadeprimary', 'fadedanger', 'fadesuccess', 'fadewarning', 'fadedefault']
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }
    if (props.medium) {
        classList += ` button-medium`
    }
    return <button className={classList}>{props.label}</button>
}

export default ButtonFade;