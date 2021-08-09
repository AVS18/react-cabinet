import react from 'react';
import OldPlan from './OldPlan';

import './style.css'
import './app.component.css'
import logo from './assets/logo.svg';
import graph from './assets/graph.svg';
import shape from './assets/Shape.svg';
import user from './assets/user.svg';
import App from './App'

//import logo from './logo.png'
// import { Drawer } from '@material-ui/core';
import React from 'react';
import Drawer from '@material-ui/core/Drawer';

  
class Home extends react.Component{
    constructor(props){
        super(props);
        this.state = {'view':'create'}
    }
    updateView = (scr,event) => {
        event.preventDefault();
        console.log(scr)
        this.setState({view:scr})
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
                                        src={shape}
                                        alt="Homepage Icon"
                                    />
                                </div>
                                <div className="homepage-section" onClick={(event) => this.updateView("plan",event)} title="Dashboard">
                                    <img
                                        className="icons graph-profile"
                                        src={graph}
                                        alt="Graph Icon"
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

export default Home;