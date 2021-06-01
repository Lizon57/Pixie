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
        const { saveWebsiteToStorage } = this.props;

        return (
            <div className="flex editor-options-container">
                <div className={"pointer circle" + (isOpen ? ' open' : '')} title="Save and publish" onClick={this.toggleMenu}>
                    <span className="fas editor-menu-icn"></span>
                </div>
                <div className={"menu-container" + (isOpen ? ' open' : '')} onClick={saveWebsiteToStorage}>
                    <div className="pointer item">
                        <span className="fas save-icn"></span>
                        Save
                        </div>

                    <div className="pointer item">
                        <span className="fas publish-icn"></span>
                        Publish
                        </div>
                </div>
            </div>
        )
    }
}