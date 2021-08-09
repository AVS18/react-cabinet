import react from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home'
import Login from './Login'
import Register from './Register'
class AppRouter extends react.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                </Switch>
            </Router>
        )
    }
}

export default AppRouter;