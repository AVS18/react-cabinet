import react from 'react';
import './style.css'
import './app.component.css'
import logo from './assets/logo.svg';
import search from './assets/search.svg';
import graph from './assets/graph.svg';
import shape from './assets/Shape.svg';
import user from './assets/user.svg';
import wava from './the-wawa-foundation-1.svg'
import log from './log.png'
import App from './App'

//import logo from './logo.png'
// import { Drawer } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

  
import logo from './logo.png'
import OldPlan from './OldPlan';
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
                {/* <div id="menu">
                    <div className="nav-bar" >
                        <center><img height="50" width="50" src={logo} alt="techolution-logo" style={{marginTop:"50px"}} /></center>
                        <img height="70" src={wava} alt="wawa-logo" />
                        <br />
                        <ul>
                            <li>
                                <a href="/" onClick={(event)=> this.updateView('create',event)} className="side_link">
                                    <div>
                                        <i className="fa fa-home" aria-hidden="true"></i> &nbsp; Create Planogram
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/" onClick={(event)=> this.updateView('view',event)} className="side_link">
                                    <div>
                                        <i className="fa fa-calendar-o" aria-hidden="true"></i> &nbsp; My Planograms
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content_panel" id="content">
                    <div className="header_menu">
                        <div>
                            <a href="/"> <img src={log} alt="login-logo" className="img_head"/></a>
                        </div>
                    </div>
                    <div className="card_layout">
                        {this.state.view ==="create" && <App />}
                        {this.state.view ==="view" && <OldPlan />}
                    </div>
                </div> */}
    <div className="drawer-container">
  <div className="drawer">
    

    <Drawer variant="permanent" anchor="left" className="drawer-container drawer">
    <div className="sidenav-content">
    <div className="homepage-section" title="Dashboard">
        <img className="logo home-profile" src={logo} alt="Logo" />
      </div>
      <div className="homepage-section" title="Dashboard">
        <img
          className="icons home-profile"
          src={shape}
          alt="Homepage Icon"
          routerLink="/dashboard"
          routerLinkActive="active"
        />
      </div>
      <div className="homepage-section" title="Search Dashboard">
        <img
          className="icons search-profile"
          src={search}
          alt="Search Icon"
        />
      </div>
      <div className="homepage-section" title="Dashboard">
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
    <App />
    </div>
    {/* <App /> */}
            </div>
        )
    }
}

export default Home;