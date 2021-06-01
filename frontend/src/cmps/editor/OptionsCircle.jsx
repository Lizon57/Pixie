import React from 'react';

export class OptionsCircle extends React.Component {
    state = {
        isOpen: false,

    }


    toggleMenu = () => {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }

    render() {
        const { isOpen } = this.state;

        return (
            <div className="flex editor-options-container">
                <div className={"pointer circle" + (isOpen ? ' open' : '')} title="Save and publish" onClick={this.toggleMenu}>
                    <span className="fas editor-menu-icn"></span>
                </div>
                <div className={"menu-container" + (isOpen ? ' open' : '')}>
                    <span>HIUSH</span>
                </div>
            </div>
        )
    }
}