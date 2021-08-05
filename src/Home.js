import react from 'react';
import './style.css'
import wava from './the-wawa-foundation-1.svg'
import log from './log.png'
import App from './App'
class Home extends react.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <div className="main">
                <div id="menu">
                    <div className="nav-bar" >
                        <img height="70" src={wava} alt="wawa-logo" style={{marginTop:"50px"}} />
                        <br />
                        <ul>
                            <li>
                                <a href="/" className="side_link">
                                    <div>
                                        <i className="fa fa-home" aria-hidden="true"></i> &nbsp; Create Planogram
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/" className="side_link">
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
                        <App />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;