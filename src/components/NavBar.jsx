import React, {useState, useEffect} from 'react'
import { Container, Nav, Navbar, Button, Image, Modal, ButtonToolbar, NavbarBrand, NavbarToggle, NavbarCollapse} from 'react-bootstrap'
import PropTypes from 'prop-types'
import  CartContext  from '../context/CartContext'
import { useContext } from 'react'
import { produce, getProductData } from '../productStore'

function NaviBar() {
    const logoStyle = {
        textDecoration: 'none',
        color: 'inherit',
        fontSize: '2rem',
        fontWeight: 'bold'
    }

    const modalShow = {
        display: 'block',
        position: 'initial'
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    const {getTotalQuantity, getProductQuantity, deleteFromCart, getProductTotalPrice, getTotalCost, cart} = useContext(CartContext)

    // POST method implementation
    async function postData(url = "", data = cart) {
        await fetch("https://backendserver-shoppingcart.herokuapp.com/checkout", {
            method: "POST",
            mode: 'cors',
            headers: {
                'Accept': "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }).then(res =>  res.json())
        .then((x) => window.location.href = x)
    }

    return (
        <div>
            <Navbar className='mt-3' expand='sm'>
                <Navbar.Brand href='/' className='ms-3' style={logoStyle}>
                    good<strong style={{ color: "#51087E" }}>Sleep</strong>
                </Navbar.Brand>

                <Navbar.Toggle className='me-2'/>

                <Navbar.Collapse className='mx-2 justify-content-end'>
                        <Button type='button' variant='outline-primary' onClick={handleShow} className='btn mt-2' style={{fontWeight: 'bold'}}>checkout {getTotalQuantity()} items</Button>             
                </Navbar.Collapse>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Shopping Cart</Modal.Title>
                        <hr/>
                    </Modal.Header>
                    
                        {getTotalQuantity() === 0 ? (
                            <Modal.Body style={{fontSize: '2rem', fontWeight: 'bold'}}> 
                                There are no items in your cart!
                            </Modal.Body>
                        ):(
                            <Modal.Body> 
                                
                                <Container>
                                    Items in your cart: <br/><br/>

                                    {cart.map((product, index) => {
                                        if (getProductQuantity(product.id) === 0) {
                                            return null
                                        } else if (getProductQuantity(product.id) >= 1) {
                                            return (
                                                <div key={index}>
                                                    <h2>{getProductData(product.id).title}</h2>

                                                    <p>{getProductQuantity(product.id) + " total"}</p>
                                                    
                                                    <p>{"$" + getProductTotalPrice(product.id)}</p>

                                                    <Button onClick={() => deleteFromCart(product.id)}>Remove</Button>

                                                    <br/>
                                                    <hr/>
                                                </div>
                                            )
                                        }
                                    })}
                                    
                                    <br/>
                                    <h1>Total: ${getTotalCost()}</h1>

                                    <Button variant='success' onClick={postData}>Purchase Items!</Button>
                                </Container>
                            </Modal.Body>
                        )}
                </Modal>
            </Navbar>
        </div>
  )
}

NaviBar.defaultProps ={
    title: 'Good Sleep'
}

NaviBar.propTypes = {
    title: PropTypes.string
}

export default NaviBar