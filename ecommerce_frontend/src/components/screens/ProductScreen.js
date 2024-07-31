import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Container } from 'react-bootstrap';
import Rating from '../Rating';
import axios from "axios";

function ProductScreen({params}) {
  const { id } = useParams()
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get(``);
      ///api/product/${id}
      setProduct(data);
    }
    fetchProduct()
  }, []);
  return (
    <Container>
      <div>
        <Link to="/" className='btn btn-dark my-3'>Go Back</Link>

        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.image} fluid/>
          </Col>
        </Row>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.product_name}</h3>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </div>
    </Container>
  )

}

export default ProductScreen
