import React from 'react';


const Select = (props) => {
    let classList = '';
    let types = ['select', 'select-medium', 'select-large']
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }
    return <button className={classList}>{props.label}</button>
}

export default Select;
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
//         let selectOPtions = this.props.selectOptions;
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