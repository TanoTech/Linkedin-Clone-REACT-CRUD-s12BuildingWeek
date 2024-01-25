import React, { useEffect, useContext, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from '../redux/contexts/ProfileContext';

const Login = ({ setShowNavbar }) => {
    const { setSelectedToken } = useContext(ProfileContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const tokens = {
        "gaetanoN@epicode.it": {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2Y1ZDYwMGJlMTAwMTgzYTg2OWMiLCJpYXQiOjE3MDU5MTgzMDEsImV4cCI6MTcwNzEyNzkwMX0.oC8mhZ_YldjX2-Ab-I6p9knSGsc-L2IlVxX95iBN73o"
        },
        "matteoC@epicode.it": {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyNDMyMzA4Mjk2MzAwMTgwMWViODIiLCJpYXQiOjE3MDYxODE0MTEsImV4cCI6MTcwNzM5MTAxMX0.B9PuUsUq5hDOPHv2mA-cOffeke9RiQf49wPw0XqfQTA"
        },
        "marcoD@epicode.it": {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxMzE2OTkxM2Y2NTAwMThkMDkxZDciLCJpYXQiOjE3MDYxMTEzMzcsImV4cCI6MTcwNzMyMDkzN30.Q9p9AxpE24QwecbTBAp4XwbsPCqH_JW43x_keAdTAD0"
        },
        "antonioC@epicode.it": {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyNDMzYzA4Mjk2MzAwMTgwMWViODQiLCJpYXQiOjE3MDYxODE0MzcsImV4cCI6MTcwNzM5MTAzN30.76zZnt7T4MVUDhk1yCLVFXqhKkaDvz0tJbZyOQi_rfk"
        },
        "andreaP@epicode.it": {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyMjY4ZjkxM2Y2NTAwMThkMDk1MzgiLCJpYXQiOjE3MDYxNzQwOTYsImV4cCI6MTcwNzM4MzY5Nn0.OVPwYuRl1MiQPPbZCIkNlTgJqbK7F5jAynyg1xtUSuE"
        },
        "marcoV@epicode.it": {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyNDRhYTA4Mjk2MzAwMTgwMWViOTkiLCJpYXQiOjE3MDYxODE4MDIsImV4cCI6MTcwNzM5MTQwMn0.Okz0D2Jiq1gBxd_39EU7zX_WtrNxYwsWx5_Z39_lImA"
        }
    };

    useEffect(() => {
        setShowNavbar(false);
        return () => {
            setShowNavbar(true);
        };
    }, [setShowNavbar]);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setError("");
    };

    const handleLogin = (event) => {
        event.preventDefault();
        console.log('email selezionata', email)

        if (tokens[email]) {
            setSelectedToken(tokens[email].token);
            console.log('Token impostato:', tokens[email].token);
            navigate('/user-profile');
        } else {
            setError("Email non valida o token non trovato");
        }
    };

    return (
            <Container fluid className='d-flex'>
                <Row className="justify-content-center align-items-center min-vh-100">
                    <Col md={6} className="p-4">
                        <h1>Welcome to your professional community</h1>
                        <Form onSubmit={handleLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email or phone</Form.Label>
                                <Form.Control required as="select" defaultValue="Choose..." onChange={handleEmailChange}>
                                    <option  value="">Choose...</option>
                                    {Object.keys(tokens).map(email => (
                                        <option key={email} value={email}>{email}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mb-3">
                                Log in
                            </Button>
                        </Form>
                        <div>Don't have a LinkedIn account? <a href="#signup">Sign up now</a></div>
                    </Col>
                </Row>
                <img className='img-fluid' style={{ width: '42rem' }} src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="LinkedIn" />
            </Container>
        
    );    
}

export default Login;