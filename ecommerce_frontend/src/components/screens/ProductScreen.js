import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Container } from 'react-bootstrap';
import Rating from '../Rating';
import axios from "axios";
import { Card } from 'react-bootstrap';

function ProductScreen({params}) {
  const { id } = useParams()
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get(`/api/product/${id}`);
      ///api/product/${id}
      setProduct(data);
    }
    fetchProduct()
  }, []);
  return (
    <Container>
      <div>
        <Link to="/" className="btn btn-dark my-3 btn btn-xs">
          <i className="fa-solid fa-backward"></i> Go Home
        </Link>

        <Row>
          <Col md={4}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>

          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.product_name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                  color={"#f8e825"}
                />
              </ListGroup.Item>
              <ListGroup.Item>Brand: {product.product_brand} </ListGroup.Item>

              <ListGroup.Item>Description: {product.product_info}</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>USD {product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.stockcount > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button className='btn-block btn-success' disabled={product.stockcount == 0} type='button'>Add to Cart</Button>

                </ListGroup.Item>


              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  )

}

export default ProductScreen
