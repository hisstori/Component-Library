import React from 'react';



const Checkbox = (props) => {
    let classList = '';
    let types = ['black', 'black-empty', 'blue', 'blue-empty']
    if (types.includes(props.type)) {
        classList += ` input-${props.type}`
    }
    return <label className='container'><span className='checkmark'><input type='checkbox' checked='checked' className={classList}>{props.label}</input></span></label>
}

export default Checkbox;