import NavBar from '../Components/NavBar'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Row, Col, message} from 'antd'
import Products from '../Components/Products'

function Home(){
    const [code, setCode] = useState([])

    useEffect(() => {
        const getCodes = async() => {
            try{
                const {data} = await axios.get('/code/get')
                setCode(data)
            }catch(error){
                message.error("Error")
            }
        }
        getCodes()
    }, [])

    return(
    <div>
        <NavBar>
            <Row>
                {code.map((products) => (
                    <Col xs={24}  sm={6} md={12} lg={6} >
                        <Products className='products' products={products} />
                    </Col>
                ))}
            </Row>
        </NavBar>
    </div>
    )
}

export default Home