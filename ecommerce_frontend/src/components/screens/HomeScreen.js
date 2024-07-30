import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { Row, Col, Card } from 'react-bootstrap';
import Product from '../Product';

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
            <Product product={products} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default HomeScreen
