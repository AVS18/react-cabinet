import react from 'react';
import OldPlan from './OldPlan';

import '../style.css'
import '../app.component.css'
import logo from '../assets/logo.svg';
import search from '../assets/search.svg';
import exit from '../assets/exit.png'
import home from '../assets/Shape.svg';
import user from '../assets/user.svg';
import App from './App'
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { withRouter } from 'react-router-dom';
//import logo from './logo.png'
// import { Drawer } from '@material-ui/core';
import React from 'react';
import Drawer from '@material-ui/core/Drawer';

  
class Home extends react.Component{
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props){
        super(props);
        this.state = {'view':'create'}
    }
    updateView = (scr,event) => {
        event.preventDefault();
        this.setState({view:scr})
    }

    logout = () => {
        const { cookies } = this.props;
        cookies.remove('token');
        this.props.history.push('/')
    }
    
    render(){
        
        return(
            <div className="main">
                <div className="drawer-container">
                    <div className="drawer">
                        <Drawer variant="permanent" anchor="left" className="drawer-container drawer">
                            <div className="sidenav-content">
                                <div className="homepage-section" title="Dashboard">
                                    <img className="logo home-profile" src={logo} alt="Logo" />
                                </div>
                                <div className="homepage-section" onClick={(event) => this.updateView("create",event)} title="Dashboard">
                                    <img
                                        className="icons home-profile"
                                        src={home}
                                        alt="Homepage Icon"
                                    />
                                </div>
                                <div className="homepage-section" onClick={(event) => this.updateView("plan",event)} title="Dashboard">
                                    <img
                                        className="icons graph-profile"
                                        src={search}
                                        alt="Search Icon"
                                    />
                                </div>
                                <div className="homepage-section" onClick={this.logout} title="Dashboard">
                                    <img
                                        className="icons graph-profile"
                                        src={exit}
                                        alt="Exit Icon"
                                    />
                                </div>
                                <br />
                                <br />
                                <div>
                                    <div className="profile-section" title="User Profile">
                                        <img
                                        className="user-profile"
                                        src={user}
                                        alt="User Profile Icon"
                                        />
                                    </div>
                                </div>
                            </div>

                        </Drawer>
                    </div>
                    {this.state.view==="create" && <App />}
                    {this.state.view==="plan"&& <OldPlan />}
                </div>
            </div>
        )
    }
}

export default withRouter(withCookies(Home));