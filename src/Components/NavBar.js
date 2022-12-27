import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { message, Button } from 'antd';
import {useState} from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import Search from './Search'

function NavScrollExample({children}) {
    const [category, setCategory] = useState('')

    const item = async() => {
        try{
            const {data} = await axios.get(`/found/${category}`);
            ReactDOM.render(<Search product={data} />, document.getElementById('root'))
        }catch(error){
            message.error('item not found')
        }
    }
  return (
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#">Code Market</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/postchoice">My Posts</Nav.Link>
            </Nav>
            <Form className="d-flex">
                <Form.Control
                onChange={(e) => setCategory(e.target.value)}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button onClick={item} variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        {children}
    </div>
  );
}

export default NavScrollExample