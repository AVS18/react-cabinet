import react from 'react'
import '../style.css'
import '../app.component.css'
import '../login.css'
import {Container,Form,Button} from 'react-bootstrap';
import logo from '../assets/logo.svg';
import Drawer from '@material-ui/core/Drawer';
import axios from 'axios';

class Register extends react.Component{
    constructor(props){
        super(props);
        this.state = {
            'username':'',
            'password':'',
            'email':'',
            'firstname':''
        }
    }
    updateState = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    submit = async(event) =>{
        event.preventDefault();
        let data = this.state;
        let response = await axios.post('http://35.230.11.154:4321/api/register',{'data':data})
        if (response.data.status){
            alert(response.data.msg)
            this.props.history.push('/login')
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
                                <div style={{textAlign:'center'}}><img src={logo} alt="logo" width="100" /><br /><p>Registration Portal</p></div>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" name="firstname" value={this.state.firstname} onChange={this.updateState}  placeholder="Enter First Name" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" value={this.state.email} onChange={this.updateState} placeholder="Enter Email" />
                                </Form.Group>
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
                                <Form.Group className="mb-3" controlId="formBasicButton">
                                    <div style={{textAlign:"center"}}>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </Form.Group>
                            </Form>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Register;