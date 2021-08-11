import react from 'react'
import axios from 'axios'
import '../App.css'
import {Container,Row,Col} from 'react-bootstrap';

class OldPlans extends react.Component{
    constructor(props){
        super(props);
        this.state = {"data":[]}
    }
    componentDidMount = async() =>{
        await axios.get('http://35.230.11.154:4321/api/plan')
        .then((response)=>{this.setState({data:response.data.data})})
        .catch((err)=>console.log(err))
    }
    render(){
        return(
            <div className="App">
                <div className="App-header">
                    <Container>
                        {this.state.data.map((planogram,index)=>{
                            return(
                                <div key={index}>
                                    <Row>
                                        <Col sm="6">
                                            <p>{planogram.planoname}</p>
                                            {planogram.rowele.map((value,index)=>{
                                                return(
                                                    <div key={index}>
                                                        <Row>
                                                        {planogram.colele.map((val2,index2)=>{
                                                            return(
                                                                <div key={index2} style={{width:"50px",borderRadius:"10px",height:"50px",margin:"10px",display:"flex",position:"flex-start",backgroundColor:planogram.colorArray[value][val2],color:"white",fontSize:"smaller"}}> 
                                                                    <b>{value},{val2}</b>
                                                                </div>
                                                            )
                                                        })}
                                                        </Row>
                                                    </div>
                                                )
                                            })}
                                        </Col>
                                        <Col sm="6">
                                            <table className="table">
                                                <thead>
                                                <tr>
                                                    <th>Category Name</th>
                                                    <th>Row, Col points</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {planogram.finalSelect.map((value,index)=>{return(
                                                    <tr key={index}>
                                                        <td>{value.name}</td>
                                                        <td>{value.points.map((val2)=>{return(<span>({val2[0]},{val2[1]})&emsp;</span>)})}</td>
                                                    </tr>
                                                )})}
                                                </tbody>
                                            </table>
                                        </Col>
                                    </Row>
                                </div>
                            )
                        })}
                        
                    </Container>
                </div>    
            </div>
        )
    }
}
export default OldPlans;