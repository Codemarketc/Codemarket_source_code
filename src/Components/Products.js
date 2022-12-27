import Card from 'react-bootstrap/Card';
import {Button} from 'antd'

function Product({products}) {
  const click = () => {
    window.location.pathname = `/product/${products._id}`
  }
  
  return (
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
        <div className="cover-items">
          <Card>
          <Card.Img className="card-image" src={products.image} />
          <Card.Body>
              <Card.Title>{products.name}</Card.Title>
              <Card.Text>
                  {products.description}
              </Card.Text>
              <p>${products.price}</p>
              <Button onClick={click}>View</Button>
          </Card.Body>
          </Card>
        </div>
    </div>
  );
}

export default Product;