import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import {Button, message} from 'antd'
import ViewCode from './ViewCode'
import ReactDOM from 'react-dom'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios'

function Params({product}){

    const pay = () => {
        axios.post("/pay", {name: product.name, APIkey: product.APIkey, html: product.html, css: product.css, js: product.js, price: product.price}).then((response) => {
            window.location.href = response.data
        }).catch(error => message.error("Error, could not make payment"))
    }
    
    const runCode = () => {
        ReactDOM.render(<ViewCode html={product.html} css={product.css} js={product.js} name={product.name} />, document.getElementById('root'))
    }

    return(
        <Row>
            <Col md={6}>
                <div class="cover-image">
                    <img src={product.image} alt={product.name} style={{height: 400, width: 500 }} />
                </div>
            </Col>
            <Col md={3} className='details'>
                <ListGroup.Item>
                    <h1>{product.name}</h1>
                </ListGroup.Item>
                <hr />
                <ListGroup.Item>price: ${product.price}</ListGroup.Item>
                <hr/>
                <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                <hr />
                <ListGroup.Item>Made By: <Avatar shape="square" size={20} icon={<UserOutlined />} />{product.username}</ListGroup.Item>
                <hr />
                <Button className='primary1' style={{width: 450}} onClick={runCode}>View Code</Button>
                <hr />
                <Button onClick={pay} style={{width: 450}}>Purchse Code</Button>
                <hr />
            </Col>
        </Row>
    )
}

export default Params