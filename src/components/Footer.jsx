import React from 'react'

function Footer() {
    const footerYear = new Date().getFullYear()

    const logoStyle = {
        textDecoration: 'none',
        color: 'inherit',
        fontSize: '1.5rem',
        color: 'white',
        width: '100%'
    }

    const footerStyle = {
        display: 'flex', 
        justifyContent: 'center', 
        background: 'black',
        height: '7rem',
        width: '100%',
    }


  return (
    <footer className='mt-5 mb-0 pt-4 row-cols-md-3' style={footerStyle}>
        <div id='footerID'>
            <p id='footerP' href='/' className='ms-3' style={logoStyle}>
                good<strong>Sleep  </strong>
                Copyright &copy; {footerYear} <br id='footerBR' style={{display: 'none'}} /> 
                All rights reserved
            </p>
        </div>
    </footer>
  )
}

export default Footer