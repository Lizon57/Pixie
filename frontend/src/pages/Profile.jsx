import React from 'react'
import { connect } from 'react-redux';
import { Loading } from '../cmps/Loading.jsx';
import { EntityList } from '../cmps/profile/EntityList.jsx'
import { webService } from '../service/web-service'
import { UserMsg } from '../cmps/UserMsg.jsx';

class _Profile extends React.Component {
    state = {
        user: this.props.user,
        entitiesType: 'All',
        entities: null,
        draftsAmount: 0,
        websitesAmount: 0,
        isUserMsg: false,
    }

    async componentDidMount() {
        const user = this.props.user;
        console.log(user);
        if (!user) {
            this.props.history.push('/')
            return;
        }
        const entities = await webService.query(user._id);
        this.setState({ ...this.state, user, entities })
        this.getEntitiesAmount();
    }

    changeEntitiesType = (entitiesType) => {
        this.setState({ entitiesType }, () => {
            console.log(this.state.entities);
            if (!this.state.entities) this.userMsgShow(`No websites to show...`);
        })
    }

    getEntities = () => {
        return Promise.resolve(this.demoData)
    }

    getEntitiesForDisplay(entitiesType) {
        let { entities } = this.state
        if (!entities) {
            return;
        }
        if (entitiesType !== 'All') {
            const isPublished = entitiesType === 'Websites';
            entities = entities.filter(entity => entity.isPublished === isPublished);
        }
        return entities;
    }

    getEntitiesAmount() {
        const { entities } = this.state;
        let draftsAmount = 0;
        let websitesAmount = 0;
        if (entities) {
            entities.forEach(entity => {
                entity.isPublished ? websitesAmount++ : draftsAmount++;
            })
        }
        this.setState({ ...this.state, draftsAmount, websitesAmount });
    }

    userMsgShow = (msg) => {
        this.setState(prevState => ({ ...prevState, isUserMsg: true, msg }));
        setTimeout(() => {
            this.setState(prevState => ({ ...prevState, isUserMsg: false, msg: '' }))
        }, 2000);
    }

    render() {

        const { entitiesType, websitesAmount, draftsAmount, user, isUserMsg, msg } = this.state
        console.log(user);
        if (!user) return <Loading />

        return (
            <>
                <section className="flex container profile-container">
                    <div className="flex column align-center profile-sidebar">
                        <div className="user-img">
                            <div className="user-img-hover">
                                <div className="fas edit-el-icn"></div>
                            </div>
                        </div>
                        <div className="flex statistics">
                            <div className="flex column full align-center">
                                <span className="amount">{websitesAmount}</span>
                                <span className="stat">Websites</span>
                            </div>
                            <div className="flex column full align-center">
                                <span className="amount">{draftsAmount}</span>
                                <span className="stat">Drafts</span>
                            </div>
                        </div>
                        <div className="flex column side-nav">
                            <div className={entitiesType === 'All' ? 'active' : ''} onClick={() => this.changeEntitiesType('All')}>All</div>
                            <div className={entitiesType === 'Websites' ? 'active' : ''} onClick={() => this.changeEntitiesType('Websites')}>Websites</div>
                            <div className={entitiesType === 'Drafts' ? 'active' : ''} onClick={() => this.changeEntitiesType('Drafts')}>Drafts</div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="full profile-main">
                        <div className="flex space-between details">
                            <span className="greet">Hello {user.fullName}</span>
                            <span className="last-active">Last activity: {user.lastLogInAt}</span>
                        </div>
                        <EntityList entities={this.getEntitiesForDisplay(entitiesType)} entitiesType={entitiesType} />
                    </div>
                </section>
                {isUserMsg && < UserMsg msg={msg} />}
            </>
        )
    }
}

const mapDispatchToProps = {
}

function mapStateToProps(state) {
    return {
        user: state.userModule.user,
    }
}

export const Profile = connect(mapStateToProps, mapDispatchToProps)(_Profile)