import { useEffect, useContext, useState } from 'react';
import { ProfileContext } from '../redux/contexts/ProfileContext';
import axios from 'axios';
import MainProfile from './MainProfile';
import Formation from './Formation';
import Interessi from './Interessi';
import Activity from './Activity';
import { Container, Spinner } from 'react-bootstrap';
import Experience from './Experience';
import MayKnow from './MayKnow';
import News from './News';
import Footer from './Footer';
import ProfileLanguage from './ProfileLanguage';
import OtherProfileConsulted from './OtherProfileConsulted';
import Ads from './Ads';

const UserProfile = () => {
    const { profile, setProfile, selectedToken } = useContext(ProfileContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            if (!selectedToken) {
                setError('Ciao');
                setLoading(false);
                return;
            }
            const endpoint = 'https://striveschool-api.herokuapp.com/api/profile/me';
            try {
                const response = await axios.get(endpoint, {
                    headers: {
                        'Authorization': `Bearer ${selectedToken}`
                    }
                });
                console.log('Dati ricevuti', response.data)
                setProfile(response.data);
                setError('');
            } catch (err) {
                console.error('Errore nella richiesta:', err);
                setError('Errore nel caricamento del profilo.');
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, [setProfile, selectedToken]);

    if (loading) {
        return <Spinner animation="border" />;
    }

    return (
        <>
            <main className='d-flex'>
                <Container>
                    <MainProfile data={profile} />
                    <Activity data={profile} />
                    <Experience data={profile._id} />
                    <Formation />
                    <Interessi />
                </Container>
                <section className='d-none d-md-block'>
                    <ProfileLanguage data={profile} />
                    <Ads />
                    <OtherProfileConsulted />
                    <MayKnow />
                    <News />
                    <Ads />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default UserProfile;