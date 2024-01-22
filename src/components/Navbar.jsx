import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Image } from 'react-bootstrap';
import { FaHome, FaNetworkWired, FaBriefcase, FaEnvelope, FaBell } from 'react-icons/fa';

const NavbarTop = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><img className='img-fluid' src="./assets/logo/linkedinLogo.png" alt="" /></Navbar.Brand>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Cerca"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Cerca</Button>
            </Form>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav.Link href="#"><FaHome /> Home</Nav.Link>
                    <Nav.Link href="#"><FaNetworkWired /> Rete</Nav.Link>
                    <Nav.Link href="#"><FaBriefcase /> Lavoro</Nav.Link>
                    <Nav.Link href="#"><FaEnvelope /> Messaggistica</Nav.Link>
                    <Nav.Link href="#"><FaBell /> Notifiche</Nav.Link>
                    <NavDropdown title={<span><Image src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png" roundedCircle width="30" height="30" className="d-inline-block align-top" alt="Profilo" /> Tu</span>} id="nav-dropdown">
                    <div>
                            <div className='d-flex'>
                                <div><img className='img-fluid' src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png" alt="" /></div>
                                <div>
                                    <p>Nome utente</p>
                                    <p>Posizione attuale</p>
                                </div>
                            </div>
                        </div>
                        <NavDropdown.Divider />
                        <h6>Account</h6>
                        <NavDropdown.Item>Prova premium per 0 EUR</NavDropdown.Item>
                        <NavDropdown.Item>Impostazioni e privacy</NavDropdown.Item>
                        <NavDropdown.Item>Guida</NavDropdown.Item>
                        <NavDropdown.Item>Lingua</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <h6>Gestisci</h6>
                        <NavDropdown.Item>Post e attività</NavDropdown.Item>
                        <NavDropdown.Item>Account per la pubblicazione di of...</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Esci</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarTop;