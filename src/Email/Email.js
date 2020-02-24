import React from 'react';

const InputText = (props) => {
    let classList = '';
    let types = ['email', 'email-medium', 'email-large']
    if (types.includes(props.type)) {
        classList += ` input-${props.type}`
    }
    return <div className='email'><label>Email</label><br/><input className={classList} placeholder='Email'></input></div>
}

export default InputText;