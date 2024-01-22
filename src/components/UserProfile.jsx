import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainProfile from './MainProfile';
import Formation from './Formation';
import Interessi from './Interessi';
import Activity from './Activity';

const UserProfile = () => {
    const [profile, setProfile] = useState(null);

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
            } catch (error) {
                console.error('Errore nella richiesta:', error);
            }
        };
        fetchProfile();
    }, []);
    if (!profile) {
        return <div>Caricamento del profilo...</div>;
    }

    return (
        <div>
            {/* 
            <h1>Profilo</h1>
            <p>Nome: {profile.name}</p>
            <p>Cognome: {profile.surname}</p>
            <p>Email: {profile.email}</p>
            <p>Username: {profile.username}</p>
            <p>Bio: {profile.bio}</p>
            <p>Titolo: {profile.title}</p>
            <p>Area: {profile.area}</p>
            {profile.image && <img src={profile.image} alt="Profilo" />}
            */}
            <MainProfile data={profile} />
            <Activity data={profile} />
            <Formation data={profile}/>
            <Interessi data={profile}/>
        </div>
    );
};

export default UserProfile;
