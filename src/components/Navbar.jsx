import React, { useState, useEffect, useContext } from 'react';
import { ProfileContext } from '../redux/contexts/ProfileContext';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Image, InputGroup, NavLink, Spinner } from 'react-bootstrap';
import { FaHome, FaNetworkWired, FaBriefcase, FaEnvelope, FaBell, FaSearch } from 'react-icons/fa';

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
                    <Nav.Link href="#"><FaNetworkWired className='navIcon' /> <>My Network</> </Nav.Link>
                    <Nav.Link href="#"><FaBriefcase className='navIcon' /> <>Jobs</> </Nav.Link>
                    <Nav.Link href="#"><FaEnvelope className='navIcon' /> <>Messaging</></Nav.Link>
                    <Nav.Link href="#"><FaBell className='navIcon' /> <>Notifications</> </Nav.Link>
                    <NavDropdown title={<span className='d-flex flex-column'> <Image src={userProfileImg} roundedCircle width="30" height="30" className="d-inline-block align-top navIcon" alt="Profilo" /> Me </span>} >
                        <div>
                            <div className='d-flex'>
                                <div><img className='img-fluid dropImg' src={userProfileImg} alt="foto profilo utente" /></div>
                                <div>
                                    <p>{userProfileName}</p>
                                    <p>{userProfileTitle}</p>
                                    <Link to='/user-profile'><Button className='btn btn-primary'>View Profile</Button></Link>
                                </div>
                            </div>
                        </div>
                        <NavDropdown.Divider />
                        <h6>Account</h6>
                        <NavDropdown.Item>Try Premium for free</NavDropdown.Item>
                        <NavDropdown.Item>Settings & Privacy</NavDropdown.Item>
                        <NavDropdown.Item>Help</NavDropdown.Item>
                        <NavDropdown.Item>Language</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <h6>Manage</h6>
                        <NavDropdown.Item>Post & Activity</NavDropdown.Item>
                        <NavDropdown.Item>Job Posting Account</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Sign out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <NavDropdown title={'For Business'}>
                </NavDropdown>
                <NavLink>Try Premium for free</NavLink>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarTop;