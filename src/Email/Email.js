import React from 'react';

const InputText = (props) => {
    let classList = '';
    let types = ['small', 'medium', 'large']
    if (types.includes(props.type)) {
        classList += ` input-${props.type}`
    }
    return <input className={classList}>{props.label}</input>
}

export default InputText;