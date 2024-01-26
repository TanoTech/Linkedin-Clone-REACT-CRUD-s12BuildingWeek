import React, { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../redux/contexts/ProfileContext';
import { Container } from 'react-bootstrap';
import Ads from './Ads';
import { Link } from 'react-router-dom';

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
            <div>
                <h2>My Connections</h2>
                {connectionDetails.length > 0 ? (
                    connectionDetails.map(connection => (
                        <div key={connection._id}>
                            <Link to={`/user/${connection._id}`}>
                                <img src={connection.image} alt="profile" style={{ width: '50px', height: '50px' }} />
                                <p>{connection.name} {connection.surname}</p>
                            </Link>
                            <button onClick={() => handleRemoveConnection(connection._id)}>Remove Connection</button>
                        </div>
                    ))
                ) : (
                    <p>No connections yet.</p>
                )}
            </div>
            <Ads />
        </Container>
    );
}

export default MyNetwork;