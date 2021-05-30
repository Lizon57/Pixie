import React from 'react'

export class Profile extends React.Component {
    state = {

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
                <div className="side-nav"></div>
                </div>
                <div className="profile-main">
                im main!
                </div>
            </section>
        )
    }
}