import React from 'react';

const ButtonOutline = (props) => {
    let classList = '';
    let types = ['outprimary', 'outdanger', 'outsuccess', 'outwarning', 'outdefault']
    if (types.includes(props.type))  {
        classList += ` button-${props.type}`
    } 
    if (props.medium) {
        classList += ` button-medium`
    }
    return <button className={classList}>{props.label}</button>
}

export default ButtonOutline; 