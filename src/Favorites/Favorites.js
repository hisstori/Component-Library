import React from 'react';


const Favorites = (props) => {
    let classList = '';
    let types = ['favorites', 'heart']
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }
    return <button className={classList}>{props.label}</button>
}

export default Favorites;