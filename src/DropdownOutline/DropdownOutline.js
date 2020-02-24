import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Select from 'react-select';
import './DropdownOutline.css';



class DropdownOutline extends React.Component {
    constructor () {
        super ();

        this.state = {
            displayMenu: false,
        };

    this.showDropdownOutlineMenu = this.showDropdownOutlineMenu.bind(this);
    this.hideDropdownOutlineMenu = this.hideDropdownOutlineMenu.bind(this);

    };

    showDropdownOutlineMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownOutlineMenu);
        });
    }

    hideDropdownOutlineMenu() {
        this.setState({ displayMenu: false }, () => {
            document.addEventListener('click', this.hideDropdownOutlineMenu);
        });
    }

    render () {
        return (
            <div className='dropdown-outline'>Select
                <select className='button' onClick={this.showDropdownOutlineMenu}></select>

                { this.state.displayMenu ? (
                    <ul>
                        <li>Select</li>
                        <li>Data</li>
                        <li>Void2</li>
                        <li>Void</li>
                    </ul>
                ):
                (
                    null
                )
                }
            </div>
        );
    }
}

ReactDOM.render(<DropdownOutline />, document.getElementById('root'));

export default DropdownOutline;