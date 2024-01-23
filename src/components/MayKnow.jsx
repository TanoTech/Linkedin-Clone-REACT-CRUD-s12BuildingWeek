import React, { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../redux/contexts/ProfileContext'; 
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import { Container } from 'react-bootstrap';
import './css/MayKnow.css';

const MayKnow = () => {
    const { getAllPeople, fetchUsers } = useContext(ProfileContext);
    const [randomPeople, setRandomPeople] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    useEffect(() => {
        if (getAllPeople.length > 0) {
            const shuffled = [...getAllPeople].sort(() => 0.5 - Math.random());
            setRandomPeople(shuffled.slice(0, 6));
        }
    }, [getAllPeople]);

    return (
        <Container className='MayKnow'>
            <h2 className='MayKnowTitle'>People you may know</h2>

            {randomPeople.map(person => (
                <div key={person._id} className='MayKnowContent'>
                    <img className='MayKnowImg' src={person.image} alt="profile picture" />
                    <div className='MayKnowColumn'>
                        <h3 className='MayKnowName'>{person.name}</h3>
                        <p className='MayKnowJob'>{person.title}</p>
                        <button className='MayKnowBtn'><i className="bi bi-person-plus-fill"></i>Connect</button>
                    </div>
                </div>
            ))}

            <p className='MayKnowShow'>Show all</p>
        </Container>
    );
}

export default MayKnow;