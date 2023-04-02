import React from 'react'
import  {produce, getProductData}  from '../productStore'
import { Row, Col } from 'react-bootstrap'
import ProductCard from '../Card'

function Store() {

  return (
    <div>
      <Row>
        <ProductCard />
      </Row>
    </div>
  )
}

export default Store