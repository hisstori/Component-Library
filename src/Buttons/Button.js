import React from 'react';

const Button = (props) => {
    let classList = '';
    let types = ['primary', 'danger', 'success', 'warning', 'default']
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }
    return <button className={classList}>{props.label}</button>
}

export default Button;