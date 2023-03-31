import React from 'react'
import  {produce, getProductData}  from '../productStore'
import { Row, Col } from 'react-bootstrap'

function Store() {

  return (
    <div>
      <Row>
        {produce.map((product, index) => <Col key={index}>{product.title} <br /> {product.price}</Col>)}
      </Row>
    </div>
  )
}

export default Store