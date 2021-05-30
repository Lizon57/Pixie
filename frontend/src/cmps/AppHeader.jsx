import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/logo2.png';

export class AppHeader extends React.Component {
    state = {
        isNavOpen: false
    }


    onToggleNav = () => {
        const { isNavOpen } = this.state;
        this.setState({ isNavOpen: !isNavOpen });
    }


    render() {
        const { isNavOpen } = this.state;

        return (
            <>
                <header className="main-header">
                    <div className="container flex space-between align-center">
                        <span><Link to="/"><img src={logo} className="logo" alt="Logo" /></Link></span>

                        <span>
                            <span className="fas pointer hamburger-icn" onClick={this.onToggleNav}></span>
                            <ul className={"clean-list navlinks-container" + (isNavOpen ? "" : " hider")}>
                                <li><NavLink to="editor" activeClassName="active" onClick={()=>this.onToggleNav()}>Editor</NavLink></li>
                                <li><NavLink to="templates" onClick={()=>this.onToggleNav()}>Templates</NavLink></li>
                                <li><NavLink to="about" onClick={()=>this.onToggleNav()}>About</NavLink></li>
                                <li><NavLink to="profile" onClick={()=>this.onToggleNav()}>Profile</NavLink></li>
                            </ul>
                        </span>
                    </div>
                </header>
                <div className="pseudo-header"></div>
            </>
        );
    }
}