import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { Row, Col, Card } from 'react-bootstrap';
import Product from '../Product';
import { listProducts } from '../../actions/productsActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
import Message from '../Message';

function HomeScreen() {

  const dispatch = useDispatch()
  const productsList = useSelector((state) => state.productsList);
  const { error, loading, products } = productsList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  return (
    <Container>
      <br />
      <br />
      <h1 className='text-products'>Products </h1>
      <br />
      {
        loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (

          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>

                <Product product={product} />


              </Col>
            ))}
          </Row>
        )
      }


    </Container>
  )
}

export default HomeScreen
