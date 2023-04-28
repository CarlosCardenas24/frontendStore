import React from 'react'
import { Button, Card, Row, Col, Form, Container } from 'react-bootstrap'
import { produce, getProductData } from './productStore'
import  CartContext  from './context/CartContext'
import { useContext } from 'react'

function ProductCard() {
  const {addOneToCart, cart, checkCart, removeOneFromCart, deleteFromCart, getTotalCost, getProductQuantity} = useContext(CartContext)

let displayForm = true




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

              {displayForm ? (
                <Form>
                <Form.Label>  
                  In Cart: {getProductQuantity(product.id)}
                </Form.Label>
                <br />
                <Button variant="outline-primary" style={{width: '10rem', height: '2rem'}} onClick={addOneToCart(product.id)}>+</Button>
                <Button variant="outline-primary" style={{width: '10rem', height: '2rem'}} onClick={removeOneFromCart(product.id)}>-</Button>
                <Button variant='danger' style={{width: '10rem', height: '2rem'}} onClick={deleteFromCart(product.id)}>Remove from cart</Button>
              </Form>
              ) : (
                <Button variant="secondary" onClick={addOneToCart(product.id)}>Add one</Button>
              )}
              
              {/* {displayForm && 
                <Form>
                  <Form.Label> 
                    In Cart: {getProductQuantity(product.id)}
                  </Form.Label>

                  <Button variant="outline-primary" style={{width: '10rem', height: '2rem'}} onClick={() => addOneToCart(product.id)}>+</Button>
                  <Button variant="outline-primary" style={{width: '10rem', height: '2rem'}} onClick={() => removeOneFromCart(product.id)}>-</Button>
                  <Button variant='danger' style={{width: '10rem', height: '2rem'}} onClick={() => deleteFromCart(product.id)}>Remove from cart</Button>
                </Form>
              }
              {!displayForm && 
                <Button variant="secondary" onClick={() => addOneToCart(product.id)}>Add one</Button>
              } */}
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