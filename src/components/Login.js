import react from 'react'
import '../style.css'
import '../app.component.css'
import '../login.css'
import {Container,Form,Button} from 'react-bootstrap';
import logo from '../assets/logo.svg';
import Drawer from '@material-ui/core/Drawer';
import axios from 'axios';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import {withRouter} from 'react-router-dom';

class Login extends react.Component{
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            'username':'',
            'password':'',
        }
    }
    componentDidMount = async() => {
        const { cookies } = this.props;
        let token = cookies.get('token') || null;
        if(token){
            let data = {'token':token};
            let response = await axios.post('http://35.230.11.154:4321/api/validate',{'data':data});
            if(response.data.status){
                this.props.history.push('/dashboard')
            }
        }
    }
    updateState = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    submit = async(event) =>{
        event.preventDefault();
        const { cookies } = this.props;
        let data = this.state;
        let response = await axios.post('http://35.230.11.154:4321/api/login',{'data':data})
        if (response.data.status){
            cookies.set('token', response.data.token, { path: '/', maxAge: 60 });
            alert(response.data.msg)
            this.props.history.push('/dashboard')
        }else{
            alert(response.data.msg)
        }
    }
    render(){
        return(
            <div className="main">
                <div className="drawer-container">
                    <div className="drawer">
                        <Drawer variant="permanent" anchor="left" className="drawer-container drawer">
                        </Drawer>
                    </div>
                    <Container>
                        <div style={{display:"flex",justifyContent:"center",paddingTop:"100px"}}>
                            <Form onSubmit={this.submit}>
                                <div style={{textAlign:'center'}}><img src={logo} alt="Logo" width="100" /><br /><p>Login Portal</p></div>
                                <Form.Group className="mb-3" controlId="formBasicUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name="username" value={this.state.username} onChange={this.updateState} placeholder="Enter Username" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" value={this.state.password} onChange={this.updateState} placeholder="Enter Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <div style={{textAlign:"center"}}>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </Form.Group>
                                <p style={{textAlign:'right'}}>New User <a href="/register">Register Here</a></p>
                            </Form>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

export default withRouter(withCookies(Login));