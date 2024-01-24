import React, { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../redux/contexts/ProfileContext'; 
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import { Container } from 'react-bootstrap';

const OtherProfileConsulted = () => {
    const { getAllPeople, fetchUsers } = useContext(ProfileContext);
    const [randomPeople, setRandomPeople] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    useEffect(() => {
        if (getAllPeople.length > 0) {
            const shuffled = [...getAllPeople].sort(() => 0.5 - Math.random());
            setRandomPeople(shuffled.slice(0, 3));
        }
    }, [getAllPeople]);

    return (
        <Container className='SideSections bg-white mt-2 p-0 rounded border border-solid'>
            <h2 className='MayKnowTitle p-2'> Other profile consulted </h2>
            {randomPeople.map(person => (
                <div key={person._id} className='MayKnowContent px-3'>
                    <img className='MayKnowImg img-fluid' src={person.image} alt="profile picture" />
                    <div className='MayKnowColumn'>
                        <h3 className='MayKnowName HoverBluScritte'>{person.name} {person.surname}</h3>
                        <p >{person.title}</p>
                        <button className='MayKnowBtn'><i className="bi bi-person-plus-fill MayKnowIcon"></i>Connect</button>
                    </div>
                </div>
            ))}
            <Container className='p-2 fs-5 text-center ButtonSideSections'>Show all</Container>
        </Container>
    );
}

export default OtherProfileConsulted;