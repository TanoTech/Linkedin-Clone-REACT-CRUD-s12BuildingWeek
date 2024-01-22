import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Image, InputGroup, NavLink} from 'react-bootstrap';
import { FaHome, FaNetworkWired, FaBriefcase, FaEnvelope, FaBell, FaSearch } from 'react-icons/fa';
import './css/navbar.css'

const NavbarTop = () => {
        const handleSearch = (e) => {
            e.preventDefault();
        };
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><img className='img-fluid' src="./assets/logo/linkedinLogo.png" alt="" /></Navbar.Brand>
            <Form className="d-flex" onSubmit={handleSearch}>
                <InputGroup>
                <Button className='navBtn'type="submit"><FaSearch /></Button>
                    <FormControl
                        type="search"
                        placeholder="Cerca"
                        aria-label="Search"
                    />
                </InputGroup>
            </Form>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav navbarScroll>
                    <Nav.Link href="#"><FaHome className='navIcon' /><>Home</></Nav.Link>
                    <Nav.Link href="#"><FaNetworkWired className='navIcon'  /> <>Rete</> </Nav.Link>
                    <Nav.Link href="#"><FaBriefcase className='navIcon'  /> <>Lavoro</> </Nav.Link>
                    <Nav.Link href="#"><FaEnvelope className='navIcon'  /> <>Messaggistica</></Nav.Link>
                    <Nav.Link href="#"><FaBell className='navIcon' /> <>Notifiche</> </Nav.Link>
                    <NavDropdown title={<span className='d-flex flex-column'> <Image  src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png" roundedCircle width="30" height="30" className="d-inline-block align-top navIcon" alt="Profilo" /> Tu </span>} >
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
                <NavDropdown title={'Per le aziende'}>
                </NavDropdown>
                <NavLink>Prova Premium per 0 EUR</NavLink>
            </Navbar.Collapse>

        </Navbar>
    );
};

export default NavbarTop;