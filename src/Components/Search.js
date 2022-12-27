import NavBar from '../Components/NavBar'
import {Row, Col} from 'antd'
import Products from '../Components/Products'

function Search({product}){
    return(
    <div>
        <NavBar>
            <Row>
                {product.map((products) => (
                    <Col xs={24}  sm={6} md={12} lg={6} >
                        <Products className='products' products={products} />
                    </Col>
                ))}
            </Row>
        </NavBar>
    </div>
    )
}

export default Search