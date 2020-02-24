import React from 'react';

const Voucher = (props) => {
    let classList = '';
    let types = ['voucher', 'voucher-lg']
    if (types.includes(props.type)) {
        classList += ` input-${props.type}`
    }
    // if (props.large) {
        // classList += ` input-lg`
    // }
    return <div>
            <input className={classList} placeholder='Voucher Code'>
            </input><button className='redeem'>Redeem</button>
           </div>
}

export default Voucher;