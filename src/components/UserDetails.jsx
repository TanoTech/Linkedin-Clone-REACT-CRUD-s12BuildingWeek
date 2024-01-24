import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProfileContext } from '../redux/contexts/ProfileContext';
import MainProfile from './MainProfile';
import Formation from './Formation';
import Interessi from './Interessi';
import Activity from './Activity';
import Experience from './Experience';
import Footer from './Footer';
import { Spinner } from 'react-bootstrap';
import MayKnow from './MayKnow';
import News from './News';

const UserDetail = () => {
    const { userId } = useParams();
    const { getAllPeople } = useContext(ProfileContext);
    const selectedUser = getAllPeople.find(user => user._id === userId);
    if (!selectedUser) {
        return <Spinner></Spinner>;
    }
    return (
        <>
            <main>
                <MainProfile data={selectedUser} />
                <Activity data={selectedUser} />
                <Experience data={selectedUser.id} />
                <Formation />
                <Interessi />
                <section>
                    {" "}
                    <MayKnow />
                    <News />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default UserDetail;
