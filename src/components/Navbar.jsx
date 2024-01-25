import React, { useState, useEffect, useContext, useRef } from 'react';
import { ProfileContext } from '../redux/contexts/ProfileContext';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Image, InputGroup, NavLink, Spinner, Container } from 'react-bootstrap';
import { FaHome, FaNetworkWired, FaBriefcase, FaEnvelope, FaBell, FaSearch } from 'react-icons/fa';

const NavbarTop = () => {
    const { profile, performSearch, searchResults, fetchJobs, jobResults } = useContext(ProfileContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [showSearchResults, setShowSearchResults] = useState(false); 
    const searchResultsRef = useRef(null);
    const userProfileName = profile ? `${profile.name} ${profile.surname}` : <Spinner></Spinner>;
    const userProfileTitle = profile ? profile.title : '';
    const userProfileImg = profile ? profile.image : '';

    useEffect(() => {
        const timerId = setTimeout(() => {
            performSearch(searchTerm);
            if (searchTerm.trim() !== '') {
                fetchJobs({ query: searchTerm, limit: 10 });
            }
        }, 500);
        return () => clearTimeout(timerId);
    }, [searchTerm, profile, performSearch, fetchJobs]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
                setShowSearchResults(false); 
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        if (e.target.value.trim() !== '') {
            setShowSearchResults(true); 
        }
    };

    return (
        <Navbar bg="light" expand="lg" className='MyNavBar'>
            <Container>
                <Navbar.Brand href="#home">
                    <Link to='/'><img className='img-fluid' src="./assets/logo/linkedinLogo.png" alt="Logo" /></Link>
                </Navbar.Brand>
                <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                    <InputGroup>
                        <Button className='navBtn'><FaSearch /></Button>
                        <FormControl
                            type="search"
                            placeholder="Cerca"
                            aria-label="Search"
                            onChange={handleSearchChange}
                        />
                    </InputGroup>
                </Form>
                {showSearchResults && searchTerm.length > 0 && searchResults.length > 0 && (
                    <div className="search-results-container" ref={searchResultsRef}>
                        {searchResults.slice(0, 6).map((otherProfile) => (
                            <Link key={otherProfile._id} to={`/user/${otherProfile._id}`} className="search-result-item" onClick={() => setShowSearchResults(false)}>
                                <img className='img-fluid' src={otherProfile.image} alt='immagine profilo' />
                                {`${otherProfile.name} ${otherProfile.surname}`}
                                <span>{otherProfile.title}</span> 
                            </Link>
                        ))}
                        {jobResults.map((job) => (
                            <div key={job._id} className="search-result-item" onClick={() => setShowSearchResults(false)}>
                                <p>{job.title}</p>
                                <p>{job.company}</p>
                            </div>
                        ))}
                    </div>
                )}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='justify-content-center align-c'>
                    <Nav navbarScroll>
                    <div className='d-flex flex-column align-self-center LinkHover'>
                        <FaHome className='align-self-center StyleLinkIconNav'/>
                        <Link to='/' className='StyleLinkIconNav'> Home </Link>
                    </div>
                        <Nav.Link href="#"><FaNetworkWired /> My Network </Nav.Link>
                        <div className='d-flex flex-column align-self-center LinkHover'>
                            <FaBriefcase className='align-self-center StyleLinkIconNav IconNavBar' />
                            <Link to='/jobs' className='StyleLinkIconNav'> Jobs </Link>
                        </div>
                        <Nav.Link href="#"><FaEnvelope /> Messaging</Nav.Link>
                        <Nav.Link href="#"><FaBell /> Notifications </Nav.Link>
                        <NavDropdown title={<span className='d-flex flex-column'> <Image src={userProfileImg} roundedCircle width="30" height="30" className=" navIcon" alt="Profilo" /> Me </span>} >
                            <div>
                                <div className='d-flex' id='MenuDropDown'>
                                    <div><img className='img-fluid dropImg' src={userProfileImg} alt="foto profilo utente" /></div>
                                    <div className=''>
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
                    <NavLink id='PremiumLink'>Try Premium for free</NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarTop;