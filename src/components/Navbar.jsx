import React, { useState, useEffect, useContext } from 'react';
import { ProfileContext } from '../redux/contexts/ProfileContext';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Image, InputGroup, NavLink, Spinner } from 'react-bootstrap';
import { FaHome, FaNetworkWired, FaBriefcase, FaEnvelope, FaBell, FaSearch } from 'react-icons/fa';
import './css/navbar.css';

const NavbarTop = () => {
    const { profile, performSearch } = useContext(ProfileContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const userProfileName = profile ? `${profile.name} ${profile.surname}` : <Spinner></Spinner>;
    const userProfileTitle = profile ? profile.title : '';
    const userProfileImg = profile ? profile.image : '';

    useEffect(() => {
        if (!searchTerm.trim()) {
            setSearchResults([]);
            return;
        }

        const timerId = setTimeout(() => {
            performSearch(searchTerm);
        }, 500);

        return () => clearTimeout(timerId);
    }, [searchTerm, profile, performSearch]);

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
                        {searchResults.map((otherProfile) => (
                            <div key={otherProfile._id} className="search-result-item">
                                <img className='img-fluid' src={otherProfile.image} alt='immagine profilo' />
                                {otherProfile.name} {otherProfile.surname}
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
                    <NavDropdown title={<span className='d-flex flex-column'> <Image src={userProfileImg} roundedCircle width="30" height="30" className="d-inline-block align-top navIcon" alt="Profilo" /> Tu </span>} >
                        <div>
                            <div className='d-flex'>
                                <div><img className='img-fluid dropImg' src={userProfileImg} alt="foto profilo utente" /></div>
                                <div>
                                    <p>{userProfileName}</p>
                                    <p>{userProfileTitle}</p>
                                    <Link to='/user-profile'><Button className='btn btn-primary'>Visualizza profilo</Button></Link>
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