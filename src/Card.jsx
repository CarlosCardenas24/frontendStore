import React from 'react'
import { Button, Card, Row, Col, Form, Container, Image } from 'react-bootstrap'
import { produce } from './productStore'
import  CartContext  from './context/CartContext'
import { useContext } from 'react'
import frontSide from "./pictures/front-side-pic.png"
import backSide from "./pictures/back-side-pic.png"
import bothSides from './pictures/both-sides-pic.png'

function ProductCard() {
  const {addOneToCart, removeOneFromCart, deleteFromCart, getProductQuantity} = useContext(CartContext)

  const mainStyle = {
    textDecoration: 'none',
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#51087E'
  }
  const otherStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
  }
  const btnStyle = {
    width: '100%', 
    height: '2rem',
    fontWeight: 'bold'
  }

  return (
    <>
    <Container>
      <Row id='cardRow'>
        {produce.map((product, index) => 
        <Col key={index}>
          <Card className='mb-3' style={{width: '22rem'}}>
            <Card.Body>
              <Card.Title style={mainStyle}>The official goodSleep T.</Card.Title>
              <div>
                <p style={{fontSize: '1.25rem'}}>{product.price}</p>
                <p style={{fontSize: '1.25rem', color: '#51087E'}}>We provide wearable designs for the most driven tech heads.</p>

                {getProductQuantity(product.id) === 0 ? (
                  <Button variant="secondary" onClick={() => addOneToCart(product.id)}>Add one</Button>
                  ) : (
                    <Form>
                      <Form.Label style={otherStyle}> 
                        In Cart: {getProductQuantity(product.id)}
                      </Form.Label>
                      <br />
                      <Button variant="outline-primary" style={btnStyle} onClick={() => addOneToCart(product.id)}>+</Button>
                      <br />
                      <Button variant="outline-primary" style={btnStyle} onClick={() => removeOneFromCart(product.id)}>-</Button>
                      <br />
                      <Button variant='danger' style={btnStyle} onClick={() => deleteFromCart(product.id)}>Remove from cart</Button>
                    </Form>
                  )
                }
              </div>
            </Card.Body> 
          </Card>
        </Col>
        )}

        <Image className='p-0' style={{height: '450px', width: '376px'}} src={frontSide}/>
      </Row>

      <Row id='cardRow' className='mt-5'>
        <Container className='m-0' style={{width: '30%'}}>
          <Image style={{height: '450px', width: '376px'}} src={backSide}/>
        </Container>

        <Container id='bothSides' style={{width: '50%'}}>
          <Image style={{height: '450px', width: 'auto'}} src={bothSides}/>
        </Container>
      </Row>
    </Container>
    </>
  )
}

export default ProductCard