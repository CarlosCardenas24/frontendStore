import React from 'react'
import { Button, Card, Row, Col, Form, Container } from 'react-bootstrap'
import { produce, getProductData } from './productStore'
import  CartContext  from './context/CartContext'
import { useContext } from 'react'

function ProductCard() {
  const {addOneToCart, cart, removeOneFromCart, deleteFromCart, getTotalCost, getProductQuantity, getTotalQuantity} = useContext(CartContext)


  return (
    <div>
    <Container>
      <Row>
      {produce.map((product, index) => 
      <Col key={index}>
        <Card className='mb-3' style={{width: '12rem'}}>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              <p>{product.price}</p>
              {getProductQuantity(product.id) === 0 ? (
                <Button variant="secondary" onClick={() => addOneToCart(product.id)}>Add one</Button>
                ) : (
                  <Form>
                    <Form.Label> 
                      In Cart: {getProductQuantity(product.id)}
                    </Form.Label>
                    <br />
                    <Button variant="outline-primary" style={{width: '10rem', height: '2rem'}} onClick={() => addOneToCart(product.id)}>+</Button>
                    <br />
                    <Button variant="outline-primary" style={{width: '10rem', height: '2rem'}} onClick={() => removeOneFromCart(product.id)}>-</Button>
                    <br />
                    <Button variant='danger' style={{width: '10rem', height: '2rem'}} onClick={() => deleteFromCart(product.id)}>Remove from cart</Button>
                  </Form>
                )
              }
            </Card.Text>
          </Card.Body> 
        </Card>
      </Col>
      )}
      </Row>
    </Container>
    </div>
  )
}

export default ProductCard