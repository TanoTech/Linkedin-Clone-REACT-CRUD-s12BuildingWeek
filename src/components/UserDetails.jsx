import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import "../App.css";
import { ProfileContext } from '../redux/contexts/ProfileContext';
import MainProfile from './MainProfile';
import Formation from './Formation';
import Interessi from './Interessi';
import Activity from './Activity';
import Experience from './Experience';
import Footer from './Footer';
import { Spinner } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const UserDetail = () => {
    const { userId } = useParams(); 
    const { getAllPeople } = useContext(ProfileContext);

    const selectedUser = getAllPeople.find(user => user._id === userId);

    if (!selectedUser) {
        return <Spinner></Spinner>;
    }

    return (
        <>
            <main className='d-flex flex-column'>
                <MainProfile data={selectedUser} />
                <Activity data={selectedUser} />
                <Experience data={selectedUser.id} />
                <Formation />
                <Interessi />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default UserDetail;
