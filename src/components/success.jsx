import React from 'react'
import { Link } from 'react-router-dom'

function Success() {
  return (
    <div className='text-center mt-5'>
        <h1>Payment successful!</h1>
        <Link to='/' className='btn btn-primary btn-lg mt-3'>
            Back to Home
        </Link>
    </div>
  )
}

export default Success