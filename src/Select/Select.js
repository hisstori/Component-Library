import React, { Component } from 'react';




// =============
// const Select = (props) => {
//     let classList = '';
//     let types = ['select', 'select-medium', 'select-large']
//     if (types.includes(props.type)) {
//         classList += ` select-${props.type}`
//     }
//     return <select className={classList}>{props.label}</select>
// }

// export default Select;
// ===============
// class Select extends Component {
//     constructor (props) {
//         super (props) 
//     }

//     handleChange = (event) =>
//     {
//         let selectedValue = event.target.value;
//         this.props.onSelectChange(selectedValue);
//     }

//     render () {
//         let selectOptions = this.props.selectOptions;
//         let options = selectOptions.map((data) => 
//         <option
//             key={data.id}
//             value={data.id}
//         >
//             {data.name}
//         </option>
//     );

//     return (
//         <select name='customSearch' calssName='custom-search-select' onChange={this.handleChange}>
//             <option>Select Data</option>
//             {options}
//         </select>
//         )
//     }
// }

// export default Select;