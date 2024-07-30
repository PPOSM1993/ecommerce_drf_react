import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { Row, Col, Card } from 'react-bootstrap';

function HomeScreen() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const {data} = await axios.get('/api/products/');
      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <Container>
      <br />
      <h1>Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            
            <Card>
              <img src={product.image} alt="" />
            </Card>
            <br/>
            <h5>{product.product_name}</h5>

            <h6>Category: {product.product_category}</h6>
            <p>Price {product.price}</p>
            <p className="me-auto d-sm-inline-block">{product.product_info}</p>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default HomeScreen
