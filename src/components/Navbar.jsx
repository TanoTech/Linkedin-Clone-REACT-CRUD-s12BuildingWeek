import React, { useState, useEffect, useContext } from 'react';
import { ProfileContext } from '../redux/contexts/ProfileContext';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Image, InputGroup, NavLink, Spinner, Container } from 'react-bootstrap';
import { FaHome, FaNetworkWired, FaBriefcase, FaEnvelope, FaBell, FaSearch } from 'react-icons/fa';

const NavbarTop = () => {
    const { profile, performSearch, searchResults, fetchJobs, jobResults } = useContext(ProfileContext);
    const [searchTerm, setSearchTerm] = useState('');
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
    return (
        <Navbar bg="light" expand="lg" className='MyNavBar '>
            <Container>
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
                </Form>
                {searchTerm.length > 0 && searchResults.length > 0 && (
                    <div className="search-results-container">
                        {searchResults.slice(0, 6).map((otherProfile) => (
                            <Link key={otherProfile._id} to={`/user/${otherProfile._id}`} className="search-result-item">
                                <img className='img-fluid' src={otherProfile.image} alt='immagine profilo' />
                                {`${otherProfile.name} ${otherProfile.surname}`}
                                <p>{otherProfile.title}</p>
                            </Link>
                        ))}
                        {jobResults.map((job) => (
                            <div key={job._id} className="search-result-item">
                                <p>{job.title}</p>
                                <p>{job.company}</p>
                            </div>
                        ))}
                    </div>
                )}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='justify-content-center align-c'>
                    <Nav navbarScroll>
                        <Link to='/home'> <FaHome className='navIcon' /> <>Home</> </Link>
                        <Nav.Link href="#"><FaNetworkWired className='navIcon' /> <>My Network</> </Nav.Link>
                        <Link to='/jobs' ><FaBriefcase className='navIcon' /> <>Jobs</> </Link>
                        <Nav.Link href="#"><FaEnvelope className='navIcon' /> <>Messaging</></Nav.Link>
                        <Nav.Link href="#"><FaBell className='navIcon' /> <>Notifications</> </Nav.Link>
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