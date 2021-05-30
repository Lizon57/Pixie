import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { EntityList } from '../cmps/profile/EntityList.jsx'

class _Profile extends React.Component {
    state = {
        entities: 'websites'
    }

    componentDidMount() {
        const { userId } = this.props.match.params;
    }

    changeEntities = (entites) => {
        this.setState({ entites })
    }

    render() {

        return (
            <section className="profile-container">
                <div className="profile-sidebar">
                    <div className="user-img"></div>
                    <div className="statistics">
                        <div><span className="amount">1</span><span className="stat">Websites</span></div>
                        <div><span className="amount">4</span><span className="stat">Drafts</span></div>
                    </div>
                    <div className="side-nav">
                        <NavLink onClick={() => this.changeEntities('websites')} activeClassName="active" to="/profile/testy/websites">Websites</NavLink>
                        <NavLink onClick={() => this.changeEntities('drafts')} activeClassName="active" to="/profile/testy/drafts">Drafts</NavLink>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="profile-main">
                    <div className="details">
                        <span className="greet">Hello Puki</span>
                        <span className="last-active">Last activity: 01/01/2021</span>
                    </div>
                    <Switch>
                        <Route path="/profile/:userId/:entityType" component={EntityList}></Route>
                        <Route path="/profile/:userId/:entityType" component={EntityList}></Route>
                    </Switch>
                </div>
            </section>
        )
    }
}

const mapDispatchToProps = {
}

function mapStateToProps(state) {
    return {
        data: state.dataModule.data,
    }
}

export const Profile = connect(mapStateToProps, mapDispatchToProps)(_Profile)