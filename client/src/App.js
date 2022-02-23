import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import { Row, Col } from 'antd';
import List from './components/List';


function App() {
  return (
    <div className="App">
     
    <Row style={{marginTop:"200px"}}>
      <Col span={12}>

      <Add/>
      </Col>
      <Col span={12}>
        <List/>
      </Col>
    </Row>
   
   
   

    </div>
  );
}

export default App;
