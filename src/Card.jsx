import React from 'react'
import { Button, Card, Row, Col, Form, Container } from 'react-bootstrap'
import { produce, getProductData } from './productStore'

function ProductCard() {
  return (
    <Container>
      <Row>
      {produce.map((product, index) => 
      <Col key={index}>
        <Card className='mb-3'>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              <p>{product.price}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      )}
      </Row>
    </Container>
  )
}

export default ProductCard