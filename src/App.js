import './App.css';
import react from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import axios from 'axios'
class App extends react.Component{
    constructor(props){
        super(props)
        this.state = {
            'rows':1,
            'cols':1,
            'rowele':[0],
            'colele':[0],
            'colorArray':[["#a6a6a6"]],
            'colorsAvailable':["#DFFF00","#FFBF00","#FF7F50","#DE3163","#9FE2BF","#40E0D0","#6495ED","#CCCCFF"],
            'currentColor':'#a6a6a6',
            'pastColor':"#a6a6a6",
            'name':'',
            'oldname':'',
            'tempSelect': [],
            'finalSelect':[],
            'allPointsSelect':[]
        }
    }
    updateCategory = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    updateValue = (event) => {
        this.setState({[event.target.name]:event.target.value})
        if(event.target.name==="rows"){
            let rarray = []
            for(let i=0;i<event.target.value;i++){
                rarray.push(i);
            }
            let colorArray = [] 
            for(let i=0;i<event.target.value;i++){
                let colors = []
                for(let j=0;j<this.state.cols;j++){
                    colors[j] = "#a6a6a6"
                }
                colorArray.push(colors)
            }
            this.setState({rowele:rarray,colorArray:colorArray})
        }
        else if(event.target.name==="cols"){
            let carray = []
            for(let i=0;i<event.target.value;i++){
                carray.push(i);
            }
            let colorArray = [] 
            for(let i=0;i<this.state.rows;i++){
                let colors = []
                for(let j=0;j<event.target.value;j++){
                    colors[j] = "#a6a6a6"
                }
                colorArray.push(colors)
            }
            this.setState({colele:carray,colorArray:colorArray})
        }
    }

    selectBox = (r,c,event)=> {
        if(this.state.currentColor!=="#a6a6a6"&&this.state.currentColor===this.state.pastColor){
            console.log("Same Color Reused")
        }else if(this.state.name!==''&&this.state.name===this.state.oldname){
            console.log("Same Name Reused")
        }else{
            let allPointsSelect = this.state.allPointsSelect;
            let duplicate = allPointsSelect.findIndex((value,index)=>value[0]===r&&value[1]===c)
            if(duplicate>=0){
                console.log("Same Item Reselected");
            }else{
                let colorArray = this.state.colorArray;
                colorArray[r][c] = this.state.currentColor;
                let tempSelect = this.state.tempSelect;
                let point = [r,c];
                tempSelect.push(point)
                allPointsSelect.push(point)
                this.setState({colorArray:colorArray,tempSelect:tempSelect,allPointsSelect:allPointsSelect})
            }
        }
    }

    fixColors = (event) => {
        let finalSelect = this.state.finalSelect;
        let obj = {'name':this.state.name,'points':this.state.tempSelect}
        finalSelect.push(obj)
        let pastColor = this.state.currentColor
        let oldname = this.state.name
        this.setState({finalSelect:finalSelect,tempSelect:[],pastColor,oldname})
    }

    saveplan = async(event) => {
        let data = this.state;
        let response = await axios.post('http://35.230.11.154:4321/api/plan',{'data':data})
        console.log(response)
    }
    render(){
        return(
            <div className="App">
                <div className="App-header">
                    <Container>
                        <Row>
                            <Col sm="6">
                                <p>Planogram Boxes</p>
                                {this.state.rowele.map((value,index)=>{
                                    return(
                                        <div key={index}>
                                            <Row>
                                            {this.state.colele.map((val2,index2)=>{
                                                return(
                                                    <div key={index2} onClick={(event)=>this.selectBox(value,val2,event)} style={{width:"50px",borderRadius:"10px",height:"50px",margin:"10px",display:"flex",position:"flex-start",backgroundColor:this.state.colorArray[value][val2],color:"white",fontSize:"smaller"}}> 
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
                                <p>Planogram UI</p>
                                <div className={{margin:"10px"}}>
                                    <Row className="status-card">
                                        <Col sm="6">
                                            <p>Enter Rows</p>
                                            <input name="rows" type="number" value={this.state.rows} min="1" onChange={this.updateValue} />
                                        </Col>
                                        <Col sm="6">
                                            <p>Enter Columns</p>  
                                            <input name="cols" type="number" value={this.state.cols} min="1" onChange={this.updateValue} />
                                        </Col>
                                    </Row>
                                </div>
                                <br />
                                <Row>
                                    <Col sm={6}>
                                        <p>Name a category</p>
                                        <input type="text" name="name" onChange={this.updateCategory} />
                                    </Col>
                                    <Col sm={6}>
                                        <p>Box Color</p>
                                        <select onChange={this.updateCategory} name="currentColor"> 
                                            {this.state.colorsAvailable.map((value,index) => {
                                                return(
                                                    <option key={index} value={value} style={{backgroundColor:{value}}}>{value}</option>
                                                )
                                            })}
                                        </select>
                                    </Col>
                                </Row>
                                <br /><br />
                                <Button onClick={this.fixColors} variant="primary">Fix Selection</Button>&emsp;
                                <Button onClick={this.saveplan} variant="info">Save Planogram</Button>
                            </Col>
                        </Row>
                        <br /><br />
                        {this.state.finalSelect.length>0 && 
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Category Name</th>
                                <th>Row, Col points</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.finalSelect.map((value,index)=>{return(
                                <tr key={index}>
                                    <td>{value.name}</td>
                                    <td>{value.points.map((val2)=>{return(<span>({val2[0]},{val2[1]})&emsp;</span>)})}</td>
                                </tr>
                            )})}
                            </tbody>
                        </table>
                        }
                    </Container>
                </div>    
            </div>
        )
    }
}


export default App;
