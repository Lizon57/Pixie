import React from 'react'

export class Profile extends React.Component {
    state = {

    }

    render() {
        return (
            <section className="profile-container">
                <div className="profile-sidebar">
                <div className="user-img"></div>
                <div className="statistics"></div>
                <div className="side-nav"></div>
                </div>
                <div className="profile-main">
                im main!
                </div>
            </section>
        )
    }
}