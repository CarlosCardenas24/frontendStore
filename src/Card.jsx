import React from 'react'
import { Button, Card, Row, Col, Form, Container } from 'react-bootstrap'
import { produce, getProductData } from './productStore'
import  CartContext  from './context/CartContext'
import { useContext } from 'react'

function ProductCard() {
  const {addOneToCart, cart, checkCart} = useContext(CartContext)

  return (
    <div>
    <Container>
      <Row>
      {produce.map((product, index) => 
      <Col key={index}>
        <Card className='mb-3'>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              <p>{product.price}</p>
              <Button onClick={() => addOneToCart(product.id)}>Add one</Button>
            </Card.Text>
          </Card.Body> 
        </Card>
      </Col>
      )}
      </Row>
      <Row>
        <Button onClick={() => checkCart()}>Cart</Button>
      </Row>
    </Container>
    </div>
  )
}

export default ProductCard