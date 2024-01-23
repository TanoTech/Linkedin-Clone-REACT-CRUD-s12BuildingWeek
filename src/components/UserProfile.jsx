import { useEffect, useContext } from 'react';
import { ProfileContext } from '../redux/contexts/ProfileContext';
import axios from 'axios';
import MainProfile from './MainProfile';
import Formation from './Formation';
import Interessi from './Interessi';
import Activity from './Activity';
import { Spinner } from 'react-bootstrap';

const UserProfile = () => {
    const { profile, setProfile} = useContext(ProfileContext);

    useEffect(() => {
        const fetchProfile = async () => {
            const endpoint = 'https://striveschool-api.herokuapp.com/api/profile/me';
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2Y1ZDYwMGJlMTAwMTgzYTg2OWMiLCJpYXQiOjE3MDU5MTgzMDEsImV4cCI6MTcwNzEyNzkwMX0.oC8mhZ_YldjX2-Ab-I6p9knSGsc-L2IlVxX95iBN73o';
            
            try {
                const response = await axios.get(endpoint, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setProfile(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Errore nella richiesta:', error);
            }
        };
        fetchProfile();
    }, [setProfile]);
    if (!profile) {
        return  <Spinner></Spinner>;
    }

    return (
        <div>
            <MainProfile data={profile} />
            <Activity data={profile} />
            <Formation />
            <Interessi />
        </div>
    );
};

export default UserProfile;