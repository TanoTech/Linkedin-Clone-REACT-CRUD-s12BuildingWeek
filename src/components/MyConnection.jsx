import React, { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../redux/contexts/ProfileContext';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import Ads from './Ads';
import { Link } from 'react-router-dom';
import FooterHome from './FooterHome';

const MyNetwork = () => {
    const { myConnections, fetchUserProfile, removeConnection } = useContext(ProfileContext);
    const [connectionDetails, setConnectionDetails] = useState([]);

    useEffect(() => {
        const loadConnectionDetails = async () => {
            const details = await Promise.all(
                myConnections.map(async (connectionId) => {
                    const profile = await fetchUserProfile(connectionId);
                    return profile || { _id: connectionId, name: 'Unknown', surname: '', image: '' };
                })
            );
            setConnectionDetails(details);
        };

        loadConnectionDetails();
    }, [myConnections, fetchUserProfile]);

    const handleRemoveConnection = (personId) => {
        removeConnection(personId);
    };

    return (
        <Container className='d-flex'>

            <Row>
                <Col md={7}>
                    <div className='d-flex flex-wrap'>
                        {connectionDetails.length > 0 ? (
                            connectionDetails.map(connection => (

                                <Card key={connection._id} style={{ width: '12em' }} className='m-1'>
                                    <Card.Img className='mt-3 border' variant="top" src={connection.image} style={{ borderRadius: '50%', width: '5em', height: '5em', margin: '0 auto' }} />
                                    <Card.Body className='mt-auto ms-0'>
                                        <Link to={`/user/${connection._id}`} >
                                            <Card.Text style={{ height: '5em' }}>
                                                <p className='fw-bold mb-0 text-center'>{connection.name} {connection.surname}</p>
                                                <p className='mb-3 text-center'>{connection.title}</p>
                                            </Card.Text>
                                        </Link>
                                        <Button variant="primary" onClick={() => handleRemoveConnection(connection._id)}>Remove Connection</Button>
                                    </Card.Body>
                                </Card>
                            ))
                        ) : (
                            <p>No connections yet.</p>
                        )}
                    </div>
                </Col>
                <Col md={4}>
                    <Ads />
                    <FooterHome />
                </Col>
            </Row>
        </Container>
    );
}


export default MyNetwork;