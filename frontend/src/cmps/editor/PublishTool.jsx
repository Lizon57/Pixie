import React from 'react';
import { Modal } from '../Modal';
import { connect } from 'react-redux';
import { saveWeb } from '../../store/actions/web-action';


class _PublishTool extends React.Component {
    state = {
        isModalOpen: false,
    }


    toggleMenu = () => {
        const { isModalOpen } = this.state;
        this.setState(prevState => ({ ...prevState, isModalOpen: !isModalOpen }));
    }


    componentDidMount() {
        const { name } = this.props;
        if (name) this.setState({ name })
        return
    }


    handleChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        this.setState(prevState => ({ ...prevState, [name]: value }))
    }

    onSubmit = async (name, isPublished) => {
        const { data, saveWeb, user, userMsgShow } = this.props;
        // if there is no user UserMsg "Login required"
        if (!user) {
            userMsgShow('Login required');
            this.toggleMenu()
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
                userMsgShow(`${isPublished ? 'Published!' : 'Saved to Drafts'}`)

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
            userMsgShow(`${isPublished ? 'Published!' : 'Saved to Drafts'}`)

        } catch (err) {
            console.log('Error on Save', err);
        }

    }


    render() {
        const { isModalOpen } = this.state;
        const { data } = this.props;
        return (
            <>
                <div className={isModalOpen ? 'background-modal' : ''}
                    onClick={this.toggleMenu}
                ></div>
                <div className="flex editor-options-container">
                    <div className={"pointer circle" + (isModalOpen ? ' open' : '')} title="Save and publish" onClick={this.toggleMenu}>
                        <span className="fas editor-menu-icn"></span>
                    </div>
                    {isModalOpen && <Modal
                        isModalOpen={isModalOpen}
                        toggleMenu={this.toggleMenu}
                        name={data.name}
                        onSubmit={this.onSubmit}

                    />}
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
        user: state.userModule.user,
        web: state.webModule.web
    }
}

export const PublishTool = connect(mapStateToProps, mapDispatchToProps)(_PublishTool)