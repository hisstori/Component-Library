import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Select from 'react-select';
import './Select.css';



class Dropdown extends React.Component {
    constructor () {
        super ();

        this.state = {
            displayMenu: false,
        };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    };

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    render () {
        return (
            <div className='dropdown-medium'>Select
                <select className='button' onClick={this.showDropdownMenu}></select>

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

ReactDOM.render(<Dropdown />, document.getElementById('root'));

export default Dropdown;