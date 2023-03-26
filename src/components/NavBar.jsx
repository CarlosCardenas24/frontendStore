import React from 'react'
import { Container, Nav, Navbar, Button, Image, Modal, ButtonToolbar, NavbarBrand, NavbarToggle, NavbarCollapse} from 'react-bootstrap'
import PropTypes from 'prop-types';

function NaviBar() {
    const logoStyle = {
        textDecoration: 'none',
        color: 'inherit',
        fontSize: '1.5rem',
    }


    return (
        <Navbar className='mt-3' expand='sm'>
            <Navbar.Brand href='#home' className='ms-3' style={logoStyle}>
                good<strong style={{ color: "purple" }}>Sleep</strong>
            </Navbar.Brand>

            <Navbar.Toggle className='me-2'/>

            <Navbar.Collapse className='mx-2 justify-content-end'>
                    <Button type='button' variant='outline-primary' className='btn mt-2' style={{fontWeight: 'bold'}}>checkout 0 items</Button>             
            </Navbar.Collapse>

        </Navbar>
  )
}

NaviBar.defaultProps ={
    title: 'Good Sleep'
}

NaviBar.propTypes = {
    title: PropTypes.string
}

export default NaviBar