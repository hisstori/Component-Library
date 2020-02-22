import React from 'react';

const InputText = (props) => (
<div>
<input
type='text'
name={name}
required={required}
autoComplete='off'
placeholder={placeholder}
onChange={_handleChange}
/>
</div>
);

export default InputText;