import React from 'react';
import '/.Select.css';


class SelectBar extends React.Component {
    constructor () {
        super ();

        this.stae = {
            displayMenu: false,
        };

    this.showSelectBarMenu = this.showSelectBarMenu.bind(this);
    this.hideSelectBarMenu = this.showSelectBarMenu.bind(this);

    };

    showSelectBarMenu(e) {
        e.preventDefault();
        this.setState({ displayMenu: true }, () => {
        document.addEventListener('click', this.hideSelectBarMenu);
        });
    }

    hideSelectBarMenu() {
        this.setState({ displayMenu: false }, () => {
            document.addEventListener('click', this.hideSelectBarMenu);
        });
    }

    render () {
        return (
            <div className='menu'>
                <div className='button' onClick={this.showSelectBarMenu}> Select </div>

                { this.state.displayMenu ? (
                    <ul>
                        <li><p>Select</p></li>
                        <li>Data</li>
                        <li>Null</li>
                        <li>'Void'</li>
                    </ul>
                ):
                (
                    null
                )}
            </div>
        );
    }
}

export default SelectBar;