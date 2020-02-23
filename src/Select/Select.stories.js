import React from 'react';
import { storiesOf } from '@storybook/react';
import './Select.css'
import Select from './Select';


storiesOf('Select', module)
    .add('Select Bar', () => <Select
        label='Select'
        type='select'
    />)

// const selectOptions = [
//     {
//         name: 'Null'
//     },
//     {
//         name: 'Void'
//     },
//     {
//         name: 'Data'
//     },
//     {
//         name: 'Value'
//     },
// ];

// class SelectBar extends Component {
//     constructor (props) {
//         super (props)
//         this.state = {
//             selectedValue: 'Null'
//         }
//     }

//     handleSelectChange = (selectedValue) => {
//         this.setState({
//             selectedValue: selectedValue
//         });
//     }

//     render () {
//         return (
//             <div className='SelectBar'>
//                 <Select selectOptions={selcetOptions} onSelectChange={this.handleSelectChange} />
//             </div>
//         );
//     }
// }