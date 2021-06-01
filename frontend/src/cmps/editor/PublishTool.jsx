import React from 'react';
import { Modal } from '../Modal';
import { connect } from 'react-redux';
import { saveWeb } from '../../store/actions/web-action'

class _PublishTool extends React.Component {
    state = {
        isModalOpen: false,
    }


    toggleMenu = () => {
        const { isModalOpen } = this.state;
        this.setState(prevState => ({ ...prevState, isModalOpen: !isModalOpen }));
    }

    onSubmit = async (name, isPublished) => {
        const { data, saveWeb, user } = this.props;
        // if there is no user UserMsg "Login required"
        if (!user) {
            console.log('Login required');
            return;
        }
        this.toggleMenu(); //closing modal

        // if there is an a id only update 
        if (data._id) {
            const webInfo = {
                ...data,
                name,
                isPublished,
            };
            try {
                await saveWeb(webInfo);
                console.log('Saved', webInfo);
                return;
            } catch (err) {
                console.log('Error on Save', err)
                return;
            }
        }

        // if there is no id push creator too 
        const webInfo = {
            ...data,
            name,
            isPublished,
            creatorId: user._id,
        };
        try {
            await saveWeb(webInfo);
            console.log('Saved', webInfo);

        } catch (err) {
            console.log('Error on Save', err);
        }

    }


    render() {
        const { isModalOpen } = this.state;
        const { data } = this.props;
        console.log(data.name)
        return (
            <>
                <div className="flex editor-options-container">
                    <div className={"pointer circle" + (isModalOpen ? ' open' : '')} title="Save and publish" onClick={this.toggleMenu}>
                        <span className="fas editor-menu-icn"></span>
                    </div>
                    <Modal
                        isModalOpen={isModalOpen}
                        toggleMenu={this.toggleMenu}
                        name={data.name}
                        onSubmit={this.onSubmit}

                    />
                </div>
            </>
        )
    }
}




const mapDispatchToProps = {
    saveWeb
}

function mapStateToProps(state) {
    return {
        data: state.dataModule.data,
        user: state.userModule.user
    }
}

export const PublishTool = connect(mapStateToProps, mapDispatchToProps)(_PublishTool)