import React from 'react';

const InputText = (props) => {
    let classList = '';
    let types = ['email', 'email-medium', 'email-large']
    if (types.includes(props.type)) {
        classList += ` input-${props.type}`
    }
    // if (props.medium) {
    //     classList += ` input-medium`
    // }
    return <div><label>Email</label><br/><input className={classList} placeholder='Email'></input></div>
}

export default InputText;