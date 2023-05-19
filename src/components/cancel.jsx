import React from 'react'
import { Link } from 'react-router-dom'

function Cancel() {
  return (
    <div className='text-center mt-5' style={{height: '75vh'}}>
        <h1>Order canceled.</h1>
        <Link to='/' className='btn btn-primary btn-lg mt-3'>
            Back to Home
        </Link>
    </div>
  )
}

export default Cancel