import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function FooterHome() {
    return (
        <Container>
            <Row>
                <Col>
                    <p>Information</p>
                    <p>Accessibility</p>
                </Col>
                <Col>
                    <p>Service center</p>
                    <p>Privacy and conditions</p>
                    <p>Advertising options</p>
                </Col>
                <Col>
                    <p>Advertising</p>
                    <p>Business services</p>
                </Col>
                <Col>
                    <p>Download the LinkedIn app</p>
                    <p>Other</p>
                    <p><img className='img-fluid' src="/assets/logo/logoFooterHome.png" alt="Linkedin logo" /> Corporation © 2024</p>
                </Col>
            </Row>
        </Container>
    );
}

export default FooterHome;