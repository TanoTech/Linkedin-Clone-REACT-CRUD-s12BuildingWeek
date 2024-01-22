import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Image, InputGroup, NavLink } from 'react-bootstrap';
import { FaHome, FaNetworkWired, FaBriefcase, FaEnvelope, FaBell, FaSearch } from 'react-icons/fa';
import './css/navbar.css';

const NavbarTop = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2Y1ZDYwMGJlMTAwMTgzYTg2OWMiLCJpYXQiOjE3MDU5MTgzMDEsImV4cCI6MTcwNzEyNzkwMX0.oC8mhZ_YldjX2-Ab-I6p9knSGsc-L2IlVxX95iBN73o';

    useEffect(() => {
        if (!searchTerm.trim()) {
            setSearchResults([]);
            return;
        }

        const performSearch = async () => {
            try {
                const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/?search=${searchTerm}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Errore nella ricerca');
                }
                const profiles = await response.json();


                const filteredProfiles = profiles.filter(profile =>
                    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
                );

                setSearchResults(filteredProfiles);
                console.log(filteredProfiles)
            } catch (error) {
                console.error('Errore: ', error);

            }
        };

        const timerId = setTimeout(() => {
            performSearch();
        }, 500);

        return () => clearTimeout(timerId);
    }, [searchTerm]);

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <img className='img-fluid' src="./assets/logo/linkedinLogo.png" alt="Logo" />
            </Navbar.Brand>
            <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                <InputGroup>
                    <Button className='navBtn'><FaSearch /></Button>
                    <FormControl
                        type="search"
                        placeholder="Cerca"
                        aria-label="Search"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </InputGroup>
                {searchResults.length > 0 && (
                    <div className="search-results-container">
                        {searchResults.map((profile) => (
                            <div key={profile._id} className="search-result-item">
                                <img className='img-fluid' src={profile.image} alt='immagine profilo' />{profile.name} {profile.surname}
                            </div>
                        ))}
                    </div>
                )}
            </Form>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className='justify-content-center align-c'>
                <Nav navbarScroll>
                    <Nav.Link href="#"><FaHome className='navIcon' /><>Home</></Nav.Link>
                    <Nav.Link href="#"><FaNetworkWired className='navIcon' /> <>Rete</> </Nav.Link>
                    <Nav.Link href="#"><FaBriefcase className='navIcon' /> <>Lavoro</> </Nav.Link>
                    <Nav.Link href="#"><FaEnvelope className='navIcon' /> <>Messaggistica</></Nav.Link>
                    <Nav.Link href="#"><FaBell className='navIcon' /> <>Notifiche</> </Nav.Link>
                    <NavDropdown title={<span className='d-flex flex-column'> <Image src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png" roundedCircle width="30" height="30" className="d-inline-block align-top navIcon" alt="Profilo" /> Tu </span>} >
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