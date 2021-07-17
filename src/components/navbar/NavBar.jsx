import React from 'react'
import { Link } from 'react-router-dom';
import LinkWidget from './LinkWidget'
import { Container, Figure, Nav, Navbar } from 'react-bootstrap'
require('../styles.css')
const NavBar = () => {
    return (
       



        <Navbar sticky="top" collapseOnSelect expand="lg" className="navbar">
            <Container fluid>
                <Navbar.Brand className='mr-5'>
                    <Figure.Image
                        width={171}
                        height='auto'
                        alt="logo"
                        src="https://i.imgur.com/C3zXSSv.png"

                    />
                </Navbar.Brand>
                <Navbar.Toggle className="navbar-toggle" aria-controls="responsive-navbar-nav " />
                <Navbar.Collapse id="responsive-navbar-nav ">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="mr-2"><LinkWidget posicionlink={0} /></Nav.Link>


                        <Nav.Link className="mr-2" as={Link} to="/productos"><LinkWidget posicionlink={1} /></Nav.Link>
                        <Nav.Link className="mr-2" as={Link} to="/productos/Ropa"><LinkWidget posicionlink={2} /></Nav.Link>
                        <Nav.Link className="mr-2" as={Link} to="/productos/Accesorios"><LinkWidget posicionlink={3} /></Nav.Link>


                    </Nav>
                    <Nav >
                        <Nav.Link className="mr-2" as={Link} to="/carrito"><LinkWidget posicionlink={4} /></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavBar
